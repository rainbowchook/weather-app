import './modal.css'
import Button from '../Button/Button'

const Modal = ({handleClose, show, children}) => {
  return (
    <div className={show ? 'modal block' : 'modal hidden'}>
      <section className='modal-main'>
        {children}
        <Button className='justify-center' onClick={handleClose}>Close</Button>
      </section>
    </div>
  )
}

export default Modal
