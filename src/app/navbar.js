'use client' // client side component

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Image from 'next/image'

export default function Navbar() {
  const ref = useRef()
  const [featuresDpdown, setFeaturesDpdown] = useState(false)
  const [companyDpdown, setCompanyDpdown] = useState(false)
  const [mobileNavbar, setMobileNavbar] = useState(false)

  return (
    <>
      {mobileNavbar === true ? (
        <>
          <div
            className='navbarText absolute right-0 md:w-[70%] bg-[#fff] md:h-screen md:shadow-2xl md:flex md:flex-col md:gap-4 md:p-10 sm:w-[70%] 
          sm:h-screen sm:shadow-2xl sm:flex sm:flex-col sm:gap-3 sm:p-5 z-10   '
          >
            <Image
              src={`/icon-close-menu.svg`}
              alt='close menu'
              width={20}
              height={20}
              onClick={() => setMobileNavbar(false)}
              className='flex justify-end items-end ml-auto py-4 '
            />
            <div className='flex flex-col gap-3'>
              <span
                className='font-medium flex flex-row gap-1 items-center cursor-pointer md:text-[20px] sm:text-[18px] '
                onClick={() => setFeaturesDpdown(!featuresDpdown)}
              >
                {' '}
                Features{' '}
                <Image
                  src={`/icon-arrow-down.svg`}
                  alt='arrow down'
                  width={10}
                  height={10}
                  className='w-[9px] h-[8px] mt-1 '
                />
              </span>

              {featuresDpdown === true && (
                <ul className='flex flex-col justify-center items-start gap-3 h-auto ml-5 '>
                  <li>
                    <Link
                      href={`/todolist`}
                      className='flex flex-row items-center gap-3 md:text-[18px] sm:text-[16px] font-medium '
                    >
                      {' '}
                      <Image
                        src={`/icon-todo.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />
                      Todo List{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/calendar`}
                      className='flex flex-row items-center gap-3 md:text-[18px] sm:text-[16px] font-medium '
                    >
                      {' '}
                      <Image
                        src={`/icon-calendar.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />{' '}
                      Calendar{' '}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/reminder`}
                      className='flex flex-row items-center gap-3 md:text-[18px] sm:text-[16px] font-medium '
                    >
                      {' '}
                      <Image
                        src={`/icon-reminders.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />{' '}
                      Reminders{' '}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/planning`}
                      className='flex flex-row items-center gap-3 md:text-[18px] sm:text-[16px] font-medium '
                    >
                      {' '}
                      <Image
                        src={`/icon-planning.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />{' '}
                      Planning{' '}
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <div className='flex flex-col gap-3'>
              <span
                href={``}
                onClick={() => setCompanyDpdown(!companyDpdown)}
                className='font-medium flex flex-row gap-1 items-center cursor-pointer md:text-[20px] sm:text-[18px] '
              >
                {' '}
                Company{' '}
                <Image
                  src={`/icon-arrow-down.svg`}
                  alt='arrow down'
                  width={10}
                  height={10}
                  className='w-[9px] h-[8px] mt-1 '
                />
              </span>
              {companyDpdown === true && (
                <ul
                  ref={ref}
                  className='flex flex-col justify-center items-start gap-3 h-auto ml-5 '
                >
                  <li>
                    <Link
                      href={`/history`}
                      className='flex flex-row items-center gap-3 md:text-[18px] sm:text-[16px] font-medium '
                    >
                      History
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/team`}
                      className='flex flex-row items-center gap-3 md:text-[18px] sm:text-[18px] font-medium '
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`blog`}
                      className='flex flex-row items-center gap-3 md:text-[18px] sm:text-[16px] font-medium '
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link
              href={`/career`}
              className='font-medium md:text-[20px] sm:text-[18px]'
            >
              {' '}
              Careers{' '}
            </Link>
            <Link
              href={`/about`}
              className='font-medium md:text-[20px] sm:text-[18px]'
            >
              {' '}
              About{' '}
            </Link>

            <ul className='list-none flex flex-col justify-center items-center gap-5 '>
              <li>
                <Link
                  href={`login`}
                  className='font-medium md:text-[20px] sm:text-[18px]'
                >
                  {' '}
                  Login{' '}
                </Link>
              </li>
              <li>
                <Link
                  href={`/register`}
                  className='font-medium border-[1px] p-2 bg-transparent md:text-[20px] sm:text-[18px] h-[40px] w-full rounded-lg hover:bg-black hover:text-white '
                >
                  {' '}
                  Register{' '}
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <main className='lg:flex w-full lg:flex-row lg:justify-between lg:items-center'>
          <div className='lg:hidden md:flex md:justify-between md:w-full md:p-5 sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-full sm:p-5 '>
            <Link href={`/`}>
              <Image src={`/logo.svg`} alt='Snap' width={80} height={80} />
            </Link>

            <Image
              src={`/icon-menu.svg`}
              alt='menu toggle'
              width={25}
              height={25}
              onClick={() => setMobileNavbar(true)}
            />
          </div>

          <ul className='lg:list-none lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-8 md:hidden sm:hidden '>
            <Link href={`/`} className='px-5'>
              <Image src={`/logo.svg`} alt='Snap' width={80} height={80} />
            </Link>
            <li className='relative'>
              <span
                href={``}
                onClick={() => setFeaturesDpdown(!featuresDpdown)}
                className='font-medium flex flex-row gap-1 items-center cursor-pointer '
              >
                {' '}
                Features{' '}
                <Image
                  src={`/icon-arrow-down.svg`}
                  alt='arrow down'
                  width={10}
                  height={10}
                  className='w-[9px] h-[8px] mt-1 '
                />
              </span>

              {featuresDpdown === true && (
                <ul
                  ref={ref}
                  className='absolute top-7 left-0 bg-white shadow-2xl p-4 rounded-lg flex flex-col justify-center items-start gap-3 lg:w-[130px] md:w-[130px] sm:w-[130px] '
                >
                  <li>
                    <Link
                      href={`/todolist`}
                      className='flex flex-row items-center gap-3 text-[15px] '
                    >
                      {' '}
                      <Image
                        src={`/icon-todo.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />
                      Todo List{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/calendar`}
                      className='flex flex-row items-center gap-3 text-[15px] '
                    >
                      {' '}
                      <Image
                        src={`/icon-calendar.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />{' '}
                      Calendar{' '}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/reminder`}
                      className='flex flex-row items-center gap-3 text-[15px] '
                    >
                      {' '}
                      <Image
                        src={`/icon-reminders.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />{' '}
                      Reminders{' '}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/planning`}
                      className='flex flex-row items-center gap-3 text-[15px] '
                    >
                      {' '}
                      <Image
                        src={`/icon-planning.svg`}
                        alt=''
                        width={10}
                        height={10}
                        className='w-[10px] h-[10px] '
                      />{' '}
                      Planning{' '}
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className='relative'>
              <span
                href={``}
                onClick={() => setCompanyDpdown(!companyDpdown)}
                className='font-medium flex flex-row gap-1 items-center cursor-pointer '
              >
                {' '}
                Company{' '}
                <Image
                  src={`/icon-arrow-down.svg`}
                  alt='arrow down'
                  width={10}
                  height={10}
                  className='w-[9px] h-[8px] mt-1 '
                />
              </span>

              {companyDpdown === true && (
                <ul
                  ref={ref}
                  className='absolute top-7 left-0 bg-white shadow-2xl p-4 rounded-lg flex flex-col justify-center items-start gap-3 lg:w-[130px] md:w-[130px] sm:w-[130px] '
                >
                  <li>
                    <Link
                      href={`/history`}
                      className='flex flex-row items-center gap-3 text-[15px] '
                    >
                      History
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/team`}
                      className='flex flex-row items-center gap-3 text-[15px] '
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`blog`}
                      className='flex flex-row items-center gap-3 text-[15px] '
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href={`career`} className='font-medium'>
                {' '}
                Careers{' '}
              </Link>
            </li>
            <li>
              <Link href={`/about`} className='font-medium'>
                {' '}
                About{' '}
              </Link>
            </li>
          </ul>

          <ul className='lg:list-none lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-8 md:hidden sm:hidden '>
            <li>
              <Link href={`login`} className='font-medium'>
                {' '}
                Login{' '}
              </Link>
            </li>
            <li>
              <Link
                href={`/register`}
                className='font-medium border-[1px] p-2 bg-transparent h-[40px] w-[100px] rounded-lg hover:bg-black hover:text-white '
              >
                {' '}
                Register{' '}
              </Link>
            </li>
          </ul>
        </main>
      )}
    </>
  )
}
