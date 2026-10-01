<script setup lang="ts">
import {
    MinusIcon,
    TrendUp01Icon,
} from '@gohighlevel/ghl-icons/24/outline'
import {
    HLButton,
    HLSectionFooter,
    HLSectionFooterItem,
    HLSpace,
    HLStatistic,
    HLTag,
} from '@gohighlevel/highrise'
import { inject } from 'vue'
import NegativeTrend from '../../assets/negative-trend.vue'
import NeutralTrend from '../../assets/nuetral-trend.vue'
import PositiveTrend from '../../assets/positive-trend.vue'
import TriangleDown from '../../assets/triangle-down.vue'
import TriangleUp from '../../assets/triangle-up.vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const options = [
  {
    label: 'Marina Bay Sands',
    key: 'Marina Bay Sands',
    disabled: true,
  },
  {
    label: "Brown's Hotel, London",
    key: "Brown's Hotel, London",
  },
  {
    label: 'Atlantis Bahamas, Nassau',
    key: 'Atlantis Bahamas, Nassau',
  },
  {
    label: 'The Beverly Hills Hotel, Los Angeles',
    key: 'The Beverly Hills Hotel, Los Angeles',
  },
]

const handleSelect = (key: string, option: any) => {
  console.log('Selected:', key, option)
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Default -->
      <div>
        <h2>Default Statistic</h2>
        <HLStatistic
          id="statistic-default"
          title="Views 24 hours"
          :isClickable="true"
        >
          1,234,123
        </HLStatistic>
      </div>

      <!-- With Tooltip and Options -->
      <div>
        <h2>With Tooltip and Options</h2>
        <HLStatistic
          id="statistic-tooltip-options"
          title="Views 24 hours"
          titleTooltipContent="This is a tooltip content"
          :titleTooltipConfig="{
            placement: 'right',
          }"
          :options="options"
          @select="handleSelect"
        >
          1,234,123
        </HLStatistic>
      </div>

      <!-- With Badge/Trend Slot -->
      <div>
        <h2>With Badge/Trend Slot</h2>
        <HLStatistic
          id="statistic-badge"
          title="Views 24 hours"
          trendTitle="Unique Page Views"
          :options="options"
          @select="handleSelect"
        >
          1,234,123
          <template #trend>
            <HLTag
              id="trend-tag-positive"
              size="lg"
              color="green"
              round
              :interactive="false"
            >
              <template #icon>
                <TriangleUp />
              </template>
              100%
            </HLTag>
          </template>
        </HLStatistic>
      </div>

      <!-- With Graph Slot -->
      <div>
        <h2>With Graph Slot</h2>
        <HLStatistic
          id="statistic-graph"
          title="Views 24 hours"
          trendTitle="Unique Page Views"
          :showGraph="true"
          :options="options"
          @select="handleSelect"
        >
          1,234,123
          <template #trend>
            <HLTag
              id="trend-tag-graph"
              size="lg"
              color="green"
              round
              :interactive="false"
            >
              <template #icon>
                <TriangleUp />
              </template>
              100%
            </HLTag>
          </template>
          <template #graph>
            <PositiveTrend />
          </template>
        </HLStatistic>
      </div>

      <!-- With Icon Slot -->
      <div>
        <h2>With Icon Slot</h2>
        <HLStatistic
          id="statistic-icon"
          title="Views 24 hours"
          type="success"
          trendTitle="Unique Page Views"
          :isClickable="true"
          :options="options"
          @select="handleSelect"
        >
          1,234,123
          <template #icon>
            <TrendUp01Icon />
          </template>
          <template #trend>
            <HLTag
              id="trend-tag-icon"
              size="lg"
              color="green"
              round
              :interactive="false"
            >
              <template #icon>
                <TriangleUp />
              </template>
              100%
            </HLTag>
          </template>
        </HLStatistic>
      </div>

      <!-- With Footer -->
      <div>
        <h2>With Footer</h2>
        <HLStatistic
          id="statistic-footer"
          title="Views 24 hours"
          type="success"
          trendTitle="Unique Page Views"
          :showGraph="true"
          :isClickable="true"
          :options="options"
          @select="handleSelect"
        >
          1,234,123
          <template #icon>
            <TrendUp01Icon />
          </template>
          <template #trend>
            <HLTag
              id="trend-tag-footer"
              size="lg"
              color="green"
              round
              :interactive="false"
            >
              <template #icon>
                <TriangleUp />
              </template>
              100%
            </HLTag>
          </template>
          <template #graph>
            <PositiveTrend />
          </template>
          <template #footer>
            <HLSectionFooter
              :horizontalPadding="false"
              id="footer-statistic"
              :divider="true"
              :bottomPadding="false"
            >
              <HLSectionFooterItem justify="end">
                <HLButton
                  size="xs"
                  id="btn-footer"
                  variant="text"
                  color="blue"
                  link
                >
                  View Report
                </HLButton>
              </HLSectionFooterItem>
            </HLSectionFooter>
          </template>
        </HLStatistic>
      </div>

      <!-- Positive Trend with Graph -->
      <div>
        <h2>Positive Trend with Graph</h2>
        <HLStatistic
          id="statistic-positive"
          title="Views 24 hours"
          trendTitle="Unique Page Views"
          :showGraph="true"
        >
          1,234,123
          <template #trend>
            <HLTag
              id="trend-tag-positive-graph"
              size="lg"
              color="green"
              round
              :interactive="false"
            >
              <template #icon>
                <TriangleUp />
              </template>
              100%
            </HLTag>
          </template>
          <template #graph>
            <PositiveTrend />
          </template>
        </HLStatistic>
      </div>

      <!-- Negative Trend with Graph -->
      <div>
        <h2>Negative Trend with Graph</h2>
        <HLStatistic
          id="statistic-negative"
          title="Views 24 hours"
          type="success"
          trendTitle="Unique Page Views"
          :showGraph="true"
        >
          1,234,123
          <template #trend>
            <HLTag
              id="trend-tag-negative"
              size="lg"
              color="red"
              round
              :interactive="false"
            >
              <template #icon>
                <TriangleDown />
              </template>
              -50%
            </HLTag>
          </template>
          <template #graph>
            <NegativeTrend />
          </template>
        </HLStatistic>
      </div>

      <!-- Neutral Trend with Graph -->
      <div>
        <h2>Neutral Trend with Graph</h2>
        <HLStatistic
          id="statistic-neutral"
          title="Views 24 hours"
          type="success"
          trendTitle="Unique Page Views"
          :showGraph="true"
        >
          1,234,123
          <template #trend>
            <HLTag
              id="trend-tag-neutral"
              size="lg"
              color="gray"
              round
              :interactive="false"
            >
              <template #icon>
                <MinusIcon />
              </template>
              0%
            </HLTag>
          </template>
          <template #graph>
            <NeutralTrend />
          </template>
        </HLStatistic>
      </div>

      <!-- Different Types -->
      <div>
        <h2>Different Types</h2>
        <HLSpace wrap>
          <HLStatistic
            id="statistic-type-primary"
            title="Primary Type"
            type="primary"
          >
            12,345
          </HLStatistic>

          <HLStatistic
            id="statistic-type-success"
            title="Success Type"
            type="success"
          >
            12,345
          </HLStatistic>

          <HLStatistic
            id="statistic-type-warning"
            title="Warning Type"
            type="warning"
          >
            12,345
          </HLStatistic>

          <HLStatistic
            id="statistic-type-error"
            title="Error Type"
            type="error"
          >
            12,345
          </HLStatistic>

          <HLStatistic
            id="statistic-type-neutral"
            title="Neutral Type"
            type="neutral"
          >
            12,345
          </HLStatistic>
        </HLSpace>
      </div>

      <!-- Complete Example -->
      <div>
        <h2>Complete Example - All Features</h2>
        <div style="max-width: 400px">
          <HLStatistic
            id="statistic-complete"
            title="Total Revenue"
            type="success"
            trendTitle="Last 30 days"
            :showGraph="true"
            :isClickable="true"
            :options="options"
            titleTooltipContent="Total revenue generated in the last 30 days"
            :titleTooltipConfig="{
              placement: 'top',
            }"
            @select="handleSelect"
          >
            $1,234,567
            <template #icon>
              <TrendUp01Icon />
            </template>
            <template #trend>
              <HLTag
                id="trend-tag-complete"
                size="lg"
                color="green"
                round
                :interactive="false"
              >
                <template #icon>
                  <TriangleUp />
                </template>
                +24.5%
              </HLTag>
            </template>
            <template #graph>
              <PositiveTrend />
            </template>
            <template #footer>
              <HLSectionFooter
                :horizontalPadding="false"
                id="footer-complete"
                :divider="true"
                :bottomPadding="false"
              >
                <HLSectionFooterItem justify="end">
                  <HLButton
                    size="xs"
                    id="btn-complete"
                    variant="text"
                    color="blue"
                    link
                  >
                    View Detailed Report
                  </HLButton>
                </HLSectionFooterItem>
              </HLSectionFooter>
            </template>
          </HLStatistic>
        </div>
      </div>
    </HLSpace>
  </div>
</template>
