<template>
  <div :class="['v-student max-w-lg mx-auto py-20', { focused: isFocused }]">
    <div class="flex items-center gap-4">
      <div
        class="v-student__image-wrapper bg-gray-30 rounded-full w-20 h-20 relative"
      >
        <img
          class="v-student__image pointer-events-none"
          :src="image"
          :alt="name"
        />
      </div>
      <div>
        <label
          :class="[
            isFocused ? 'text-primary' : 'text-dark',
            'v-student__name block mb-3 text-base leading-none cursor-text font-koulen',
          ]"
          :for="uuid"
          >{{ name }} is</label
        >
        <div class="flex gap-3">
          <input
            v-model="ageValue"
            name="hours-old"
            :id="uuid"
            class="v-student__input border-light-grey focus:border-primary-light outline-none px-2 border rounded-md font-medium text-dark/30 focus:text-dark text-lg h-11 w-[50px]"
            :style="{
              width: `${inputWidth}px`,
            }"
            type="text"
            @keypress="isNumber"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
          <div class="v-student__text text-dark text-lg flex items-center">
            hours old
          </div>
          <div
            class="v-student__fake-input px-2 border font-medium text-lg absolute invisible opacity-0"
            ref="fakeInput"
          >
            {{ ageValue }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export interface IStudent {
  name: string
  age: string | null // могут быть значения больше чем 2^53, что больше, поэтому проще хранить в строке
  image?: string
}
</script>

<script setup lang="ts">
import { computed, ref, getCurrentInstance, watch } from 'vue'

const emit = defineEmits(['update:age'])

const props = withDefaults(defineProps<IStudent>(), {
  image: '',
})

const instance = getCurrentInstance()
const uuid = ref<string | undefined>(instance?.uid.toString())
const isFocused = ref<boolean>(false)

const MIN_INPUT_WIDTH = 50
const MAX_INPUT_WIDTH = 300
const fakeInput = ref<HTMLInputElement | null>(null)
const inputWidth = ref<number>()

const getInputWidth = (): void => {
  const width = fakeInput.value?.offsetWidth

  if ((width && width < MIN_INPUT_WIDTH) || !width) {
    inputWidth.value = MIN_INPUT_WIDTH
  } else if (width > MAX_INPUT_WIDTH) {
    inputWidth.value = MAX_INPUT_WIDTH
  } else {
    inputWidth.value = width
  }
}

watch(fakeInput, () => {
  if (fakeInput.value) {
    new ResizeObserver(getInputWidth).observe(fakeInput.value)
  }
})

const isNumber = (e: KeyboardEvent): void => {
  if (!/\d/.test(e.key)) return e.preventDefault()
}

const ageValue = computed<string>({
  get(): string {
    const digits = BigInt(props.age ?? ('' as string))?.toLocaleString('ru-RU')
    return digits !== '0' ? digits : ''
  },
  set(newAge: string): void {
    const age = newAge.replace(/\s/g, '') || null
    emit('update:age', age)
  },
})

const imgUrls: Record<string, unknown> = import.meta.glob(
  '../../assets/images/*.png',
  {
    import: 'default',
    eager: true,
  }
)

const image = computed<string | undefined>(
  () => imgUrls[`../../assets/images/${props.image}.png`] as string | undefined
)
</script>

<style lang="scss" src="./v-student.scss" />
