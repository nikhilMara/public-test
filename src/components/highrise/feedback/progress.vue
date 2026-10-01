<script setup lang="ts">
import {
  HLButton,
  HLProgress,
  HLSpace,
} from '@gohighlevel/highrise'
import { inject, ref } from 'vue'

const direction = inject<string>('dir') as 'ltr' | 'rtl'

const progressValue = ref(30)
const circularProgress = ref(60)
const animatedProgress = ref(0)

const increaseProgress = () => {
  if (progressValue.value < 100) {
    progressValue.value += 10
  }
}

const decreaseProgress = () => {
  if (progressValue.value > 0) {
    progressValue.value -= 10
  }
}

const animateProgress = () => {
  animatedProgress.value = 0
  const interval = setInterval(() => {
    if (animatedProgress.value < 100) {
      animatedProgress.value += 1
    } else {
      clearInterval(interval)
    }
  }, 50)
}
</script>

<template>
  <div>
    <HLSpace vertical>
      <!-- Basic Usage -->
      <div>
        <h2>Basic Usage</h2>
        <p>Progress component for showing completion status.</p>
        <HLProgress id="basic-progress" :percentage="50" />
      </div>

      <!-- Different Types -->
      <div>
        <h2>Different Types</h2>
        <HLSpace vertical>
          <div>
            <h3>Line Progress</h3>
            <HLProgress id="line-progress" type="line" :percentage="75" />
          </div>
          <div>
            <h3>Stepper Progress</h3>
            <HLProgress
              id="stepper-progress"
              type="stepper"
              :percentage="75"
              :maxSteps="4"
            />
          </div>
          <div>
            <h3>Circle Progress</h3>
            <HLProgress id="circle-progress" type="circle" :percentage="60" />
          </div>
          <div>
            <h3>Dashboard Progress</h3>
            <HLProgress
              id="dashboard-progress"
              type="dashboard"
              :percentage="80"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2>Different Sizes</h2>
        <HLSpace vertical>
          <div>
            <h3>Line Sizes</h3>
            <HLSpace vertical>
              <HLProgress id="line-sm" type="line" size="sm" :percentage="40" />
              <HLProgress id="line-md" type="line" size="md" :percentage="50" />
              <HLProgress id="line-lg" type="line" size="lg" :percentage="60" />
            </HLSpace>
          </div>
          <div>
            <h3>Circle Sizes</h3>
            <HLSpace>
              <HLProgress
                id="circle-sm"
                type="circle"
                size="sm"
                :percentage="40"
              />
              <HLProgress
                id="circle-md"
                type="circle"
                size="md"
                :percentage="50"
              />
              <HLProgress
                id="circle-lg"
                type="circle"
                size="lg"
                :percentage="60"
              />
            </HLSpace>
          </div>
        </HLSpace>
      </div>

      <!-- Different Colors -->
      <div>
        <h2>Different Colors</h2>
        <HLSpace vertical>
          <HLProgress id="progress-blue" :percentage="30" color="blue" />
          <HLProgress id="progress-green" :percentage="50" color="green" />
          <HLProgress id="progress-red" :percentage="70" color="red" />
          <HLProgress id="progress-orange" :percentage="80" color="orange" />
          <HLProgress id="progress-purple" :percentage="90" color="purple" />
        </HLSpace>
      </div>

      <!-- With Text -->
      <div>
        <h2>With Text</h2>
        <HLSpace vertical>
          <div>
            <h3>Show Percentage</h3>
            <HLProgress
              id="progress-with-text"
              :percentage="65"
              :show-text="true"
            />
          </div>
          <div>
            <h3>Custom Text</h3>
            <HLProgress id="progress-custom-text" :percentage="45">
              <template #default="{ percentage }">
                <span>{{ percentage }}% Complete</span>
              </template>
            </HLProgress>
          </div>
          <div>
            <h3>Circle with Text</h3>
            <HLProgress
              id="circle-with-text"
              type="circle"
              :percentage="75"
              :show-text="true"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Status States -->
      <div>
        <h2>Status States</h2>
        <HLSpace vertical>
          <div>
            <h3>Normal</h3>
            <HLProgress id="progress-normal" :percentage="30" status="normal" />
          </div>
          <div>
            <h3>Success</h3>
            <HLProgress
              id="progress-success"
              :percentage="100"
              status="success"
            />
          </div>
          <div>
            <h3>Warning</h3>
            <HLProgress
              id="progress-warning"
              :percentage="70"
              status="warning"
            />
          </div>
          <div>
            <h3>Error</h3>
            <HLProgress id="progress-error" :percentage="50" status="error" />
          </div>
        </HLSpace>
      </div>

      <!-- Interactive Progress -->
      <div>
        <h2>Interactive Progress</h2>
        <p>Current Progress: {{ progressValue }}%</p>
        <HLProgress
          id="interactive-progress"
          :percentage="progressValue"
          :show-text="true"
        />
        <HLSpace style="margin-top: 1rem">
          <HLButton
            id="decrease-btn"
            @click="decreaseProgress"
            variant="secondary"
          >
            Decrease
          </HLButton>
          <HLButton
            id="increase-btn"
            @click="increaseProgress"
            variant="primary"
          >
            Increase
          </HLButton>
        </HLSpace>
      </div>

      <!-- Animated Progress -->
      <div>
        <h2>Animated Progress</h2>
        <HLProgress
          id="animated-progress"
          :percentage="animatedProgress"
          :show-text="true"
        />
        <HLButton
          id="animate-btn"
          @click="animateProgress"
          style="margin-top: 1rem"
        >
          Start Animation
        </HLButton>
      </div>

      <!-- Indeterminate Progress -->
      <div>
        <h2>Indeterminate Progress</h2>
        <p>Progress with unknown completion time.</p>
        <HLProgress
          id="indeterminate-progress"
          :indeterminate="true"
          :helper-text="'This may take a few minutes'"
        />
      </div>

      <!-- Custom Height -->
      <div>
        <h2>Custom Height</h2>
        <HLSpace vertical>
          <div>
            <h3>Thin (4px)</h3>
            <HLProgress id="thin-progress" :percentage="60" :height="4" />
          </div>
          <div>
            <h3>Normal (8px)</h3>
            <HLProgress id="normal-progress" :percentage="60" :height="8" />
          </div>
          <div>
            <h3>Thick (16px)</h3>
            <HLProgress id="thick-progress" :percentage="60" :height="16" />
          </div>
        </HLSpace>
      </div>

      <!-- Multiple Progress Bars -->
      <div>
        <h2>Multiple Progress Bars</h2>
        <HLSpace vertical>
          <div>
            <h4>Task 1 - Database Migration</h4>
            <HLProgress
              id="task1-progress"
              :percentage="100"
              status="success"
              :show-text="true"
            />
          </div>
          <div>
            <h4>Task 2 - File Processing</h4>
            <HLProgress
              id="task2-progress"
              :percentage="75"
              color="blue"
              :show-text="true"
            />
          </div>
          <div>
            <h4>Task 3 - Data Validation</h4>
            <HLProgress
              id="task3-progress"
              :percentage="45"
              color="orange"
              :show-text="true"
            />
          </div>
          <div>
            <h4>Task 4 - Report Generation</h4>
            <HLProgress
              id="task4-progress"
              :percentage="0"
              color="gray"
              :show-text="true"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Circle Progress Variations -->
      <div>
        <h2>Circle Progress Variations</h2>
        <HLSpace>
          <div class="text-center">
            <h4>CPU Usage</h4>
            <HLProgress
              id="cpu-progress"
              type="circle"
              :percentage="85"
              color="red"
              :show-text="true"
            />
          </div>
          <div class="text-center">
            <h4>Memory Usage</h4>
            <HLProgress
              id="memory-progress"
              type="circle"
              :percentage="60"
              color="blue"
              :show-text="true"
            />
          </div>
          <div class="text-center">
            <h4>Disk Usage</h4>
            <HLProgress
              id="disk-progress"
              type="circle"
              :percentage="35"
              color="green"
              :show-text="true"
            />
          </div>
        </HLSpace>
      </div>

      <!-- Dashboard Progress -->
      <div>
        <h2>Dashboard Progress</h2>
        <HLSpace>
          <div class="text-center">
            <h4>Project Completion</h4>
            <HLProgress
              id="project-dashboard"
              type="dashboard"
              :percentage="78"
              :show-text="true"
            />
          </div>
          <div class="text-center">
            <h4>Goal Achievement</h4>
            <HLProgress
              id="goal-dashboard"
              type="dashboard"
              :percentage="92"
              color="green"
              :show-text="true"
            />
          </div>
        </HLSpace>
      </div>
    </HLSpace>
  </div>
</template>
