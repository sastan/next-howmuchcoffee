let easing = [0.175, 0.85, 0.42, 0.96]
const l2rVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: -200,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
}
module.exports = { l2rVariants }
