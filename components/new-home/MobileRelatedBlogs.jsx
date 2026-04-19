"use client"
import Link from 'next/link'
import React from 'react'
import { IoIosShareAlt } from 'react-icons/io'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export const relatedBlogs = [
    {
        id: 1,
        title: "The MSME Samadhaan Portal: Your Solution for Delayed Payments",
        excerpt:
            "A strategic pivot towards luxury traditional wear marks a new era for the retail giant as consumer preferences shift to artisanal authenticity.",
        blogLink: "/blogs/msme-samadhaan-portal-45-day-payment-rule"
    },
    {
        id: 2,
        title: "MSME Toll Free Number 2026 | Official Helpline, Complaint & Support Guide",
        excerpt:
            "Looking for the MSME toll free number? Get the official MSME helpline, grievance options, delayed payment help, and simple guidance for Indian businesses",
        blogLink: "/blogs/msme-toll-free-number"

    },
    {
        id: 3,
        title: "GeM Registration 2026 | Process, Fees, Eligibility & Seller Guide",
        excerpt:
            "Learn GeM registration process step by step. Check eligibility, fees, documents required and how to start selling on Government e-Marketplace.",
        blogLink: "/blogs/gem-registration"

    },
];
const MobileRelatedBlogs = () => {

    return (
        <div>


            <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                }}
                className="pb-10" // space for pagination dots
            >
                {relatedBlogs.map((blog) => (
                    <SwiperSlide key={blog.id}>
                        <div className="mb-4 bg-white p-6 rounded-lg pink-white-background h-full">
                            <h2 className="text-xl font-headline font-semibold mb-4 text-center">
                                {blog.title}
                            </h2>
                            <p className="text-xs">{blog.excerpt}</p>
                            <div className="flex justify-end gap-4 mt-4 border-t-2 border-gray-300 w-full">
                                <Link href={blog.blogLink} className="p-1 px-2 gap-1 text-sm mt-4 rounded-sm bg-[#024067] text-white font-semibold flex items-center">
                                    Read More <IoIosShareAlt />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MobileRelatedBlogs