"use client"
import { Bell, Home, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import SidebarItem from './sidebar-item'
import SidebarPostButton from './sidebar-post-button'
import SidebarAccount from './sidebar-account'
import { IUser } from '@/types'

const Sidebar = ({ user }: { user: IUser }) => {
    const sidebarItems = [
        {
            label: "Home",
            path: "/",
            icon: Home
        },
        {
            label: "Notifications",
            path: `/notifications/${user?._id}`,
            icon: Bell,
            notification: user?.hasNewNotifications
        },
        {
            label: "Profile",
            path: `/profile/${user?._id}`,
            icon: User
        }
    ]

    return (
        <section className='sticky top-0 left-0 h-screen lg:w-[266px] w-fit flex flex-col justify-between py-4 pl-2'>
            <div className="flex flex-col space-y-2">
                <div className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-sky-300 hover:bg-opacity-10 cursor-pointer transition">
                    <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
                </div>
                {sidebarItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                        <SidebarItem  {...item} />
                    </Link>
                ))}

                <SidebarPostButton />
            </div>
            <SidebarAccount user={user} />
        </section>
    )
}

export default Sidebar