'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const aboutData = [
  {
    img: '/images/about/about1.jpg',
    text: 'Travel moments shape my storytelling style. I believe natural locations, candid emotions, and clean visuals connect deeply with audiences and brands looking for authenticity.'
  },
  {
    img: '/images/about/about2.jpg',
    text: 'Urban lifestyle content reflects modern creativity. I enjoy capturing city vibes that blend fashion, confidence, and daily inspiration for young audiences.'
  },
  {
    img: '/images/about/about3.jpg',
    text: 'Creative freedom is my identity. Open spaces, bold frames, and expressive poses help me communicate positive energy and brand-friendly visuals.'
  },
  {
    img: '/images/about/about4.jpg',
    text: 'My style blends tradition with modern influence. Cultural outfits and classic looks allow brands to connect emotionally with diverse audiences.'
  },
  {
    img: '/images/about/about5.jpg',
    text: 'Premium indoor aesthetics elevate brand presence. Soft lighting and clean setups help highlight products naturally without forcing promotions.'
  },
  {
    img: '/images/about/about6.jpg',
    text: 'Public spaces inspire interaction. I focus on storytelling that feels real, relatable, and engaging across social media platforms.'
  },
  {
    img: '/images/about/about7.jpg',
    text: 'Confidence and personality matter in digital branding. Every pose and expression reflects originality and trustworthiness.'
  },
  {
    img: '/images/about/about8.jpg',
    text: 'I create content that balances emotion, visuals, and value—helping brands reach audiences through meaningful digital experiences.'
  }
]

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">
      
      {/* PAGE HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-yellow-400">Me</span>
        </h1>
        <p className="text-gray-400 text-lg">
          A visual storyteller, influencer, and brand collaborator. social media content creator with a passion for travel, lifestyle, and authentic storytelling. I create engaging content that connects brands with audiences through creativity and genuine expression.
        </p>
      </motion.div>

      {/* IMAGE + TEXT SECTIONS */}
      <div className="space-y-24 max-w-6xl mx-auto">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* IMAGE */}
            <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
              <Image
                src={item.img}
                alt="About ShoaibK Vlog"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* TEXT */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </main>
  )
}
