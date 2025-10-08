import { ref } from 'vue'

export function useForm() {
  const loading = ref(false)
  const errors = ref({})
  const success = ref(false)

  const submitForm = async (submitFn, formData) => {
    loading.value = true
    errors.value = {}
    success.value = false

    try {
      await submitFn(formData)
      success.value = true
      return { success: true }
    } catch (error) {
      if (error.response?.data?.errors) {
        errors.value = error.response.data.errors
      } else {
        errors.value = { general: 'An error occurred. Please try again.' }
      }
      return { success: false, error }
    } finally {
      loading.value = false
    }
  }

  const resetForm = () => {
    errors.value = {}
    success.value = false
    loading.value = false
  }

  return {
    loading,
    errors,
    success,
    submitForm,
    resetForm
  }
}