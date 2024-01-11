export const navAnimation = {
  hidden: {
    opacity: 0,
    y: '-200px',
    x: "-50%",
  },
  show: {
    opacity: 1,
    y: 0,
    x: "-50%",
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  }
}

export const textAnimation = {
  hidden: {
    opacity: 0,
    y: '-200px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }
}

export const backgroundAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
      opacity: 1,
      transition: {
      duration: 0.5,
      ease: 'ease',
    }
  }
}
  
export const mainAnimation = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.5,
      type: "spring", 
      stiffness: 100,
      duration: 0.9,
      ease: 'easeInOut',
    }
  }
}

export const cardAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}
  
export const cardX = {
  hidden: { 
    opacity: 0,
    scale: 0,
    x: "50%" },
  show: { 
    opacity: 1,
    scale: 1,
    x: 0 },
  }

export const cardY = {
  hidden: { 
    opacity: 0,
    scale: 0,
    y: "50%" },
  show: { 
    opacity: 1,
    scale: 1,
    y: 0 },
  }