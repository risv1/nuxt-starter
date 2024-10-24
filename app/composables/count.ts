export const useCount = () => {
    const count = ref(0)
    const increment = () => {
        count.value++
        console.log('increment')
    }
    const decrement = () => {
        count.value--
        console.log('decrement')
    }
    return {
      count,
      increment,
      decrement
    }
}