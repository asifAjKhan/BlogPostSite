import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}

      <div className='flex gap-8'>
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet 
            consectetur, adipisicing elit. Pariatur,
             nihil.
          </h1>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>On</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
          </div>

          <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing
             elit. Alias voluptatibus, veritatis earum architecto 
             quisquam eos molestiae tempore veniam eum nesciunt.
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl"/>
        </div>
      </div>

      {/* content */}

      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}

        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum omnis corrupti exercitationem,
            cupiditate velit atque reiciendis quos ipsam fuga!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a 
             odit sapiente voluptatibus fuga ut tenetur temporibus mollitia iusto suscipit reiciendis animi iste 
             dignissimos ad asperiores odio, corrupti aspernatur porro ducimus quo eum doloremque dolorem. Vel quo
             aliquid commodi dignissimos voluptatem, eaque,
             sequi, libero vitae labore ab facere reiciendis quae!
          </p>
        </div>

        {/* menu */}

        <div className="px-4 h-max sticky top-8">
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>

            <div className="flex items-center gap-8">
              <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover "
              w="48"
              h="48"
              />

              <Link className='text-blue-800'>John Doe</Link>

            </div>
              <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eveniet.</p>
              <div className="flex gap-2">
                <Link>
                  <Image src="facebook.svg" />
                </Link>
                <Link>
                  <Image src="instagram.svg" />
                </Link>
              </div>

          </div>
          
          
         <PostMenuActions />
         <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
         <div className="flex flex-col gap-2 text-sm">
           <Link className='underline'>All</Link>
           <Link className='underline' to='/'>Web Design</Link>
           <Link className='underline' to='/'>Development</Link>
           <Link className='underline' to='/'>Database</Link>
           <Link className='underline' to='/'>Search Engines</Link>
           <Link className='underline' to='/'>Marketing</Link>
         </div>
         <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
         <Search />
        </div>

      </div>
    </div>
  )
}

export default SinglePostPage