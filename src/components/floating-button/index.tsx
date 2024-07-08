// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Style Imports
import styles from './styles.module.css'

const TooltipContent = () => {
  return (
    <Card>
      <img src='/images/logos/owlsense-text-logo.png' alt='Owlsense' className='w-full' />
      <CardHeader title={`${themeConfig.templateName}`} />
      <CardContent>
        <Typography color='textSecondary' className='mbe-4'>
          GUARANTEED, INTERCONNECTED INSIGHTS THAT UNCOVER HIDDEN MEANINGS OF INFORMATION
        </Typography>
        <Typography color='textSecondary'>
          Enabling users to Monitor and Analyze vast amount of information from across the web, including Forums, Blogs,
          News, Websites, Social Media, Search Engines, Dark Web, Fusion Databases and many other Open and Close
          Sources.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' href={'https://www.theowlsense.com/'} target='_blank'>
          Visit
        </Button>
      </CardActions>
    </Card>
  )
}

const FloatingButton = () => {
  return (
    <div className={classnames(styles.wrapper, 'mui-fixed')}>
      <Tooltip
        title={<TooltipContent />}
        placement='top-end'
        slotProps={{ tooltip: { style: { padding: 0, backgroundColor: 'transparent', maxInlineSize: 400 } } }}
      >
        <a className={styles.button} role='button' href='#' target='_blank'>
          Know More
          <span className={styles.buttonInner} />
        </a>
      </Tooltip>
    </div>
  )
}

export default FloatingButton
