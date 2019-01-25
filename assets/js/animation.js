const animation = {
  duration: {
    enter: 0.3,
    leave: 0.3
  },
  zPlus: function(delay = 0) {
    return {
      x: 0,
      scale: 1.4,
      opacity: 0,
      delay: delay
    }
  },
  zMinus: function(delay = 0) {
    return {
      x: 0,
      scale: 0.6,
      opacity: 0,
      delay: delay
    }
  },
  xPlus: function(delay = 0) {
    return {
      x: 2000,
      scale: 1,
      opacity: 1,
      delay: 0
    }
  },
  xMinus: function(delay = 0) {
    return {
      x: -1000,
      scale: 1,
      opacity: 1,
      delay: 0
    }
  }
}

export default animation
