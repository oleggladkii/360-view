import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface CameraRotation {
  yaw: number
  pitch: number
  roll: number
}

export const usePlayerStore = defineStore('player', () => {
  const currentTime = ref<number | null>(null)
  const cameraRotation = ref<CameraRotation | null>(null)

  function setCurrentTime(time: number | null) {
    currentTime.value = time
  }

  function setCameraRotation(rotation: CameraRotation | null) {
    cameraRotation.value = rotation
  }

  return { currentTime, setCurrentTime, cameraRotation, setCameraRotation }
})
