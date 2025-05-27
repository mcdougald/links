import SparkleButton from './sparkle-button'

const PrimaryLinks = () => {
  return (
    <div className='flex items-center justify-center gap-6'>
      <SparkleButton className='mb-6'>
        <a
          href='https://trev.fyi'
          target='_blank'
          className={SparkleButton.ClassName}
          rel='noopener, noreferrer'
        >
          <SparkleButton.Spark />
          <SparkleButton.Backdrop />
          <SparkleButton.Text>Website</SparkleButton.Text>
        </a>
      </SparkleButton>

      <SparkleButton className='mb-6'>
        <a href='mailto:mcdougald.job@gmail.com' className={SparkleButton.ClassName}>
          <SparkleButton.Spark />
          <SparkleButton.Backdrop />
          <SparkleButton.Text>me@trev.fyi</SparkleButton.Text>
        </a>
      </SparkleButton>
    </div>
  )
}

export default PrimaryLinks
