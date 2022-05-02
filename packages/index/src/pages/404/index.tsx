import Lottie, { LottieComponentProps } from 'lottie-react'
import animationData from '../../lotties/not-found.json'

const NotFound = () => {
  const defaultOptions: LottieComponentProps = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return <Lottie {...defaultOptions} />
}

export default NotFound
