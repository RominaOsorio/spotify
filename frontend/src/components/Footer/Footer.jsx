import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='secondary_bg mx-4 px-4 py-16'>
      <div className='grid grid-cols-12'>
        <div className='col-span-3 text-sm'>
          <ul>
            <li className='font-bold mb-4'>Empresa</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Acerca de</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Empleo</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Para el registro</li>
          </ul>
        </div>
        <div className='col-span-3 text-sm'>
          <ul>
            <li className='font-bold mb-4'>Comunidades</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Para artistas</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Desarrolladores</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Publicidad</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Inversores</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Proveedores</li>
          </ul>
        </div>
        <div className='col-span-3 text-sm'>
          <ul>
            <li className='font-bold mb-4'>Enlaces útiles</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Soporte</li>
            <li className='text-gray-400 my-2 hover:text-white hover:underline cursor-pointer'>Aplicación móvil gratuita</li>
          </ul>
        </div>
        <div className='col-span-3'>
          <div className='flex justify-end gap-3'>
            {[FaInstagram, FaFacebook, FaXTwitter].map((Icon, index) => (
              <div
                key={index}
                className='bg-[#292929] text-gray-300 hover:text-white hover:bg-white/20 p-3 rounded-full cursor-pointer transition duration-300 transform hover:scale-110 shadow-md'
              >
                <Icon className='text-xl' />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='border-b border-white/10 my-14 w-full' />

      <div className='flex justify-between text-sm text-gray-400 flex-wrap gap-2'>
        <ul className='flex gap-4 flex-wrap'>
          <li className='hover:text-white cursor-pointer'>Legal</li>
          <li className='hover:text-white cursor-pointer'>Centro de privacidad</li>
          <li className='hover:text-white cursor-pointer'>Política de privacidad</li>
          <li className='hover:text-white cursor-pointer'>Cookies</li>
          <li className='hover:text-white cursor-pointer'>Publicidad</li>
          <li className='hover:text-white cursor-pointer'>Accesibilidad</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
