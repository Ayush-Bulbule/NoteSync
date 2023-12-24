import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { UserAuth } from '@/utils/auth'
import React, { useEffect } from 'react'
import Card from '@/components/Card'
import { MdAdd } from 'react-icons/md'
import Loading from '@/components/Loading'
import Header from '@/components/Header'

const dashboard = () => {
    const { user, setUser, signOut } = UserAuth()
    useEffect(() => {
        localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')))
        if (user) {
        }
        console.log(user)
    }, [])

    return (
        <>
            {
                user ?
                    <main className='conatiner flex bg-gray-100 h-screen '>
                        < Sidebar />
                        <div className="w-5/6 px-16 overflow-y-scroll">
                            <Navbar />
                            {/* Heading Section */}
                            <Header />
                            {/* Notes Section */}
                            <div className="notes  mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                                {/* Add New Note */}
                                <div className=" cursor-pointer note-card flex items-center justify-center bg-white rounded-lg shadow-md flex-col p-4">
                                    <div className="border-2 flex items-center justify-center border-dashed border-blue-400 rounded-full h-32 w-32">
                                        <MdAdd className='text-3xl' />
                                    </div>
                                    <p className='text-blue-400 font-medium mt-4'>Add Note</p>
                                </div>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>

                        </div>
                    </main > :
                    <Loading />

            }
        </>
    )
}

export default dashboard