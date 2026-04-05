import Link from 'next/link'
import React from 'react'
import { IoIosShareAlt } from 'react-icons/io'
import { relatedBlogs } from './MobileRelatedBlogs'

const RelatedBlogs = () => {
    return (
       <>
          {relatedBlogs.map((blog) => (
                        <div key={blog.id} className="mb-4 md:mb-12 bg-white p-6 rounded-lg pink-white-background">
                            <h2 className="text-lg lg:text-2xl font-headline mb-4 text-center">{blog.title}</h2>
                            <p>{blog.excerpt}</p>
                            <div className="flex justify-end gap-4 mt-4 border-t-2 border-gray-300 w-full">
                                <Link href={blog.blogLink} className="p-1 px-2 gap-1 text-sm mt-4 rounded-sm bg-[#024067] text-white font-semibold flex items-center">
                                    Read More <IoIosShareAlt />
                                </Link>
                            </div>
                        </div>
                    ))}
       </>
    )
}

export default RelatedBlogs