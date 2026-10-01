<script setup lang="ts">
import { iconToHTML, iconToSVG, replaceIDs } from '@iconify/utils'
import { Icon, getIcon } from '@iconify/vue'
import { HLIconPicker, HLInput } from '@gohighlevel/highrise'
import 'emoji-mart-vue-fast/css/emoji-mart.css'
import data from 'emoji-mart-vue-fast/data/all.json'
import { EmojiIndex, Picker } from 'emoji-mart-vue-fast/src'
// import Picker from 'emoji-mart-vue-fast/src/components/Picker.vue'
import { debounce } from 'lodash-es'
import { inject, onMounted, ref } from 'vue'
// const { EmojiIndex } = pkg

import { SearchMdIcon } from '@gohighlevel/ghl-icons/24/outline'

const emit = defineEmits(['select-gif', 'select-emoji', 'select-icon'])

// start of emoji

// https://github.com/serebrov/emoji-mart-vue
let emojiIndex = new EmojiIndex(data)
console.log(emojiIndex)
function showEmoji(emoji: any) {
  // console.log(emoji)
  emit('select-emoji', emoji)
  console.log(emoji)
}
const i18n = {
  search: 'Search for an emoji',
  notfound: 'No emoji found',
  categories: {
    search: 'Search Results',
    recent: 'Recent',
    smileys: 'Smileys',
    people: 'People & Body',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'My Symbols',
    flags: 'My Flags',
    custom: 'My Custom',
  },
}

// end of emoji

// start of gif

// url Async requesting function
function httpGetAsync(theUrl: string, callback: (response: string) => void) {
  // create the request object
  var xmlHttp = new XMLHttpRequest()

  // set the state change callback to capture when the response comes in
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText)
    }
  }

  // open as a GET call, pass in the url and set async = True
  xmlHttp.open('GET', theUrl, true)

  // call send with no params as they were passed in on the url string
  xmlHttp.send(null)

  return
}

const top_10_gifs = ref<any[]>([])

// callback for the top 8 GIFs of search
function tenorCallback_search(responsetext: string) {
  // Parse the JSON response
  var response_objects = JSON.parse(responsetext)
  console.log(response_objects)
  top_10_gifs.value = response_objects['results']

  return
}

// function to call the trending and category endpoints
function grab_data() {
  // set the apikey and limit
  var apikey = 'AIzaSyAKfJYvTXFreMOYzfJuWRjNEa3aKJpXu_8'
  var clientkey = 'my_test_app'
  var lmt = 10

  var featured_url =
    'https://tenor.googleapis.com/v2/featured?key=' +
    apikey +
    '&client_key=' +
    clientkey +
    '&limit=' +
    lmt
  httpGetAsync(featured_url, tenorCallback_search)

  // data will be loaded by each call's callback
  return
}

// SUPPORT FUNCTIONS ABOVE
// MAIN BELOW

// start the flow
grab_data()

const emojiSearch = ref('')
const gifSearch = ref('')

const searchGif = () => {
  // test search term
  if (!gifSearch.value) {
    grab_data()
    return
  }
  var search_term = gifSearch.value
  var apikey = 'AIzaSyAKfJYvTXFreMOYzfJuWRjNEa3aKJpXu_8'
  var clientkey = 'my_test_app'
  var lmt = 10
  // using default locale of en_US
  var search_url =
    'https://tenor.googleapis.com/v2/search?q=' +
    search_term +
    '&key=' +
    apikey +
    '&client_key=' +
    clientkey +
    '&limit=' +
    lmt
  httpGetAsync(search_url, tenorCallback_search)
}

const selectGif = (gif: any) => {
  emit('select-gif', gif)
  console.log(gif)
}

// end of gif

// start of icon
const getIconsFromAPI = (apiEndpoint: string, searchStr?: string) => {
  return new Promise((resolve, reject) => {
    fetch(`${apiEndpoint}/search?query=${searchStr}&limit=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve icons. Please try again later.')
        }
        return response.json()
      })
      .then(response => {
        return resolve(response.icons)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const iconifyUrl = 'https://api.iconify.design'
const icons = ref<any[]>([])
const iconSearch = ref('social')
const dfb = debounce(() => {
  const searchTerm = iconSearch.value || 'social'
  getIconsFromAPI(iconifyUrl, searchTerm).then(response => {
    icons.value = response as any[]
  })
}, 500)
const searchIcon = () => {
  dfb()
}
onMounted(() => {
  getIconsFromAPI(iconifyUrl, 'social').then(response => {
    icons.value = response as any[]
  })
  console.log(icons.value)
})
// end of icon

const selectIcon = (icon: any) => {
  const iconData: any = getIcon(icon)
  const svgData = iconToSVG(iconData, {
    height: '100%',
    width: '100%',
  })
  const constructedSVG = iconToHTML(
    replaceIDs(svgData.body),
    svgData.attributes
  )
  emit('select-icon', icon, constructedSVG)
  console.log(icon, constructedSVG)
}

const direction = inject<string>('dir') as 'ltr' | 'rtl'
</script>
<template>
  <div>
    <h2>Icon Picker</h2>
    <br />
    <HLIconPicker :allowed-types="['emojis', 'gifs', 'icons']">
      <template #emojis>
        <div class="hr-emoji-container">
          <Picker
            :data="emojiIndex"
            :emoji-size="21"
            native
            :per-line="9"
            color="var(--primary-700)"
            :show-preview="false"
            :emoji-tooltip="false"
            :i18n="i18n"
            @select="showEmoji"
          >
            <template #searchTemplate="{ onSearch }">
              <div class="emoji-search-container">
                <HLInput
                  id="search"
                  v-model:model-value="emojiSearch"
                  :prefix-icon="SearchMdIcon"
                  size="md"
                  placeholder="Search for an emoji"
                  @update:model-value="onSearch"
                />
              </div>
            </template>
          </Picker>
        </div>
      </template>
      <template #gifs>
        <div :key="top_10_gifs.length" class="hr-gif-container">
          <div class="gif-search-container">
            <HLInput
              id="search"
              v-model:model-value="gifSearch"
              :prefix-icon="SearchMdIcon"
              size="md"
              placeholder="Search for GIFs"
              @update:model-value="searchGif"
            />
          </div>
          <div class="gif-list">
            <div
              v-for="(gif, index) in top_10_gifs"
              :key="index"
              class="gif-item"
              @click="selectGif(gif)"
            >
              <img :src="gif.media_formats.nanogif.url" alt="gif" />
            </div>
          </div>
        </div>
      </template>
      <template #icons>
        <div class="hr-icon-container">
          <div class="hr-icon-search-container">
            <HLInput
              id="icon-search"
              v-model:model-value="iconSearch"
              :prefix-icon="SearchMdIcon"
              size="md"
              placeholder="Search for an icon"
              @update:model-value="searchIcon"
            />
          </div>
          <div class="icons">
            <div v-for="icon in icons" :key="icon" class="icon-item">
              <Icon :icon="icon" @click="selectIcon(icon)" />
            </div>
          </div>
        </div>
      </template>
    </HLIconPicker>
  </div>
</template>
