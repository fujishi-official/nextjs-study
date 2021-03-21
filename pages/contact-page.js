import Layout from '../components/layout'
import Image from 'next/image'

const Contact = () => {
    return (
        <Layout title='CONTACT'>
            <div className='bg-white text-center shadow-xl p-8 w-80 rounded'>
                <div className='mt-4'>
                    <p className='font-bold'>contact info</p>
                </div>
                <div className='flex justify-center mt-4'>
                    <Image
                        className='rounded-full'
                        src='/IMG_4530(1).JPG'
                        width={60}
                        height={60}
                        alt='image-photo'
                    />
                </div>
                <div className='mt-4'>
                    <p className='font-bold'>Address</p>
                    <p className='text-xs mt-2 text-gray-600'>city A</p>
                    <p className='font-bold mt-3'>MAIL</p>
                    <p className='text-xs mt-2 text-gray-600'>aaa@gmail.com</p>
                    <p className='font-bold mt-3'>PHONE</p>
                    <p className='text-xs mt-2 text-gray-600'>000-000-0000</p>
                </div>
                <div className='mt-6 flex justify-around'>
                    <a href='/' target='_blank'>
                        <svg className='w-6 h-6 mr-3 text-blue-500' height="511pt" viewBox="1 -47 511.999 511" width="511pt" xmlns="http://www.w3.org/2000/svg">
                            <path d="m161.019531 416.605469c193.21875 0 298.878907-160.074219 298.878907-298.878907 0-4.546874-.09375-9.074218-.296876-13.578124 20.507813-14.828126 38.335938-33.332032 52.398438-54.394532-18.820312 8.367188-39.078125 13.996094-60.324219 16.539063 21.6875-13.007813 38.339844-33.578125 46.191407-58.101563-20.296876 12.03125-42.773438 20.773438-66.703126 25.496094-19.167968-20.417969-46.460937-33.1875-76.679687-33.1875-58.007813 0-105.050781 47.042969-105.050781 105.03125 0 8.246094.921875 16.261719 2.722656 23.953125-87.304688-4.394531-164.722656-46.191406-216.527344-109.753906-9.019531 15.523437-14.222656 33.558593-14.222656 52.800781 0 36.441406 18.546875 68.617188 46.746094 87.4375-17.234375-.53125-33.421875-5.261719-47.574219-13.136719-.015625.441407-.015625.871094-.015625 1.339844 0 50.875 36.207031 93.351563 84.277344 102.976563-8.828125 2.402343-18.117188 3.695312-27.699219 3.695312-6.757813 0-13.34375-.664062-19.746094-1.894531 13.375 41.738281 52.15625 72.109375 98.132813 72.960937-35.953125 28.179688-81.246094 44.964844-130.46875 44.964844-8.46875 0-16.835938-.484375-25.058594-1.453125 46.488281 29.796875 101.695312 47.1875 161.023438 47.1875" fill="#1da1f2" />
                        </svg>
                    </a>
                </div>
            </div>
        </Layout>
    )
};

export default Contact
