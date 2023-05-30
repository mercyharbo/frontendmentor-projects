import Link from 'next/link'

const ToggleMenu = () => {
  return (
    <main className='lg:w-[30%] lg:p-10 '>
      <section className='flex lg:flex-col lg:justify-start lg:items-start lg:gap-5'>
        <h4 className=''>header</h4>
        <ul>
          <li>About </li>
          <li>History</li>
          <li>Join the team </li>
          <li>Press</li>
          <li>Contact us </li>
          <li>Help Center</li>
        </ul>
      </section>
      <section className='flex lg:flex-col lg:justify-start lg:items-start lg:gap-5'>
        <h4 className=''>Product</h4>
        <ul>
          <li>Developers/API</li>
          <li>unsplash Dataset</li>
          <li>Unsplash for IOS</li>
          <li>Apps & Plugins</li>
        </ul>
      </section>
      <section className='flex lg:flex-col lg:justify-start lg:items-start lg:gap-5'>
        <h4 className='font-semibold'>Community</h4>
        <ul>
          <li>Become a contributor </li>
          <li>Topics</li>
          <li>Collections</li>
          <li>Trends</li>
          <li>Unsplash Awards</li>
          <li>Stats</li>
        </ul>
      </section>
      <hr />
      <section className='flex lg:justify-between lg:items-center lg:py-3'>
        <div className='flex lg:flex-row lg:justify-start lg:items-center lg:gap-5'>
          <Link href={'/license'}>License</Link>
          <Link href={'/license'}>License</Link>
          <Link href={'/license'}>License</Link>
          <Link href={'/license'}>License</Link>
        </div>
        <div className='flex'>
          <select name='lang' id='lang'>
            <option value='English'>English</option>
          </select>
        </div>
      </section>
    </main>
  )
}

export default ToggleMenu
