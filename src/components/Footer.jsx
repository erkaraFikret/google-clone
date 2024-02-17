import React from 'react'
import CountryLookup from './CountryLookup'

const Footer = () => {
    return (
        <footer className='absolute bottom-0 text-sm text-gray-600 bg-[#f2f2f2] w-full'>
            <div className='border-b px-8 py-3'>
                <CountryLookup />
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
                <ul className='flex items-center space-x-6'>
                    <li className='hover:underline cursor-pointer'>Hakkında</li>
                    <li className='hover:underline cursor-pointer'>Reklam</li>
                    <li className='hover:underline cursor-pointer'>İşletme</li>
                    <li className='hover:underline cursor-pointer'>Arama nasıl Çalışır?</li>
                </ul>
                <ul className='flex items-center space-x-6'>
                    <li className='hover:underline cursor-pointer'>Gizlilik</li>
                    <li className='hover:underline cursor-pointer'>Şartlar</li>
                    <li className='hover:underline cursor-pointer'>Ayarlar</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer