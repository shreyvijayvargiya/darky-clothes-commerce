import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, Star, Trash2, Download, Shirt } from "lucide-react";
import {
	FaBlog,
	FaChild,
	FaEnvelope,
	FaFemale,
	FaHatCowboy,
	FaMale,
	FaQuestion,
	FaSocks,
	FaUser,
} from "react-icons/fa";
import { PiHoodie, PiPants } from "react-icons/pi";
import React, { useState, useEffect, useRef } from "react";

const images = [
	{
		id: 1,
		src: "https://uwipckr69n.ufs.sh/f/6a5ARX41rbOZaFQ78sohTYsvzD3XAMBnWVk9ieZGpruFgyIQ",
		alt: "Shirt Mens 1",
		height: "h-64",
		name: "Yellow Coral",
		price: "$120.00",
		rating: 4.7,
		description: "A beautiful yellow color mens shirts.",
		comments: [
			{
				name: "Sarah Johnson",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
				comment:
					"Absolutely stunning! The colors are so vibrant and the composition is perfect.",
				createdAt: "2024-01-15",
				rating: 5,
			},
			{
				name: "Mike Chen",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				comment: "This reminds me of my vacation in Hawaii. Beautiful work!",
				createdAt: "2024-01-14",
				rating: 4,
			},
			{
				name: "Emma Davis",
				image:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				comment: "The lighting is incredible. Perfect timing for this shot!",
				createdAt: "2024-01-13",
				rating: 5,
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		category: "Tshirts",
		gender: "Men",
	},
	{
		id: 2,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
		alt: "Gallery Image 2",
		height: "h-48",
		name: "Mountain Peaks",
		price: "$150.00",
		rating: 4.8,
		description: "Snow-capped peaks rising above wooded valleys.",
		comments: [
			{
				name: "Alex Rodriguez",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				comment: "Breathtaking view! Makes me want to go hiking right now.",
				createdAt: "2024-01-16",
				rating: 5,
			},
			{
				name: "Lisa Wang",
				image:
					"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
				comment: "The contrast between the snow and the forest is amazing.",
				createdAt: "2024-01-15",
				rating: 4,
			},
			{
				name: "David Kim",
				image:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				comment: "Perfect composition and colors. Great work!",
				createdAt: "2024-01-14",
				rating: 5,
			},
			{
				name: "Maria Garcia",
				image:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
				comment: "This is exactly what I needed for my living room wall.",
				createdAt: "2024-01-13",
				rating: 4,
			},
		],
		sizes: ["S", "M", "L", "XL"],
		category: "Hoodies",
		gender: "Women",
	},
	{
		id: 3,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
		alt: "Gallery Image 3",
		height: "h-72",
		name: "Desert Mirage",
		price: "$99.00",
		rating: 4.6,
		description: "Vast dunes under a shimmering blue sky.",
		comments: [
			{
				name: "James Wilson",
				image:
					"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
				comment:
					"The textures in this photo are incredible. Love the sand patterns!",
				createdAt: "2024-01-17",
				rating: 5,
			},
			{
				name: "Anna Thompson",
				image:
					"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
				comment: "So peaceful and serene. Perfect for meditation.",
				createdAt: "2024-01-16",
				rating: 4,
			},
		],
		sizes: ["XS", "S", "M", "L", "XL"],
		category: "Jeans/Trousers/Pants",
		gender: "Men",
	},
	{
		id: 4,
		src: "https://uwipckr69n.ufs.sh/f/6a5ARX41rbOZJCBXF522yrWswQlzTuLPkiboXcJx8fpKGR05",
		alt: "Gallery Image 4",
		height: "h-56",
		name: "Forest Path",
		price: "$85.00",
		rating: 4.4,
		description: "A winding path through a sun-dappled forest.",
		comments: [
			{
				name: "Tom Brown",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				comment: "This path looks so inviting! Makes me want to take a walk.",
				createdAt: "2024-01-18",
				rating: 4,
			},
			{
				name: "Sophie Miller",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
				comment: "The lighting through the trees is magical.",
				createdAt: "2024-01-17",
				rating: 5,
			},
			{
				name: "Ryan Taylor",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				comment: "Great depth and perspective. Very well captured!",
				createdAt: "2024-01-16",
				rating: 4,
			},
		],
		sizes: ["S", "M", "L", "XL", "XXL"],
		category: "Tshirts",
		gender: "Women",
	},
	{
		id: 5,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
		alt: "Gallery Image 5",
		height: "h-40",
		name: "Ocean Breeze",
		price: "$99.00",
		rating: 4.9,
		description: "Gentle waves and salty air by the seashore.",
		comments: [
			{
				name: "Jessica Lee",
				image:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				comment: "I can almost hear the waves! So calming and beautiful.",
				createdAt: "2024-01-19",
				rating: 5,
			},
			{
				name: "Chris Anderson",
				image:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				comment: "Perfect for my beach house. The colors are so natural.",
				createdAt: "2024-01-18",
				rating: 5,
			},
			{
				name: "Nina Patel",
				image:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
				comment: "The movement in the water is captured beautifully.",
				createdAt: "2024-01-17",
				rating: 4,
			},
			{
				name: "Mark Johnson",
				image:
					"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
				comment: "This brings back memories of my childhood summers.",
				createdAt: "2024-01-16",
				rating: 5,
			},
		],
		sizes: ["XS", "S", "M", "L"],
		category: "Hoodies",
		gender: "Men",
	},
	{
		id: 6,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
		alt: "Gallery Image 6",
		height: "h-60",
		name: "Urban Jungle",
		price: "$110.00",
		rating: 4.2,
		description: "A bustling cityscape with towering skyscrapers.",
		comments: [
			{
				name: "Kevin Zhang",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				comment: "The energy of the city is perfectly captured here.",
				createdAt: "2024-01-20",
				rating: 4,
			},
			{
				name: "Rachel Green",
				image:
					"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
				comment: "Love the architectural details and the urban vibe.",
				createdAt: "2024-01-19",
				rating: 4,
			},
		],
		sizes: ["S", "M", "L", "XL", "XXL"],
		category: "Caps",
		gender: "Kids",
	},
	{
		id: 7,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
		alt: "Gallery Image 7",
		height: "h-52",
		name: "Starry Night",
		price: "$175.00",
		rating: 5.0,
		description: "A sky full of bright stars over a calm village.",
		comments: [
			{
				name: "Daniel White",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				comment: "Absolutely mesmerizing! The stars are so clear and bright.",
				createdAt: "2024-01-21",
				rating: 5,
			},
			{
				name: "Olivia Martinez",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
				comment: "This is pure magic. Perfect for stargazing inspiration.",
				createdAt: "2024-01-20",
				rating: 5,
			},
			{
				name: "Ethan Clark",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				comment: "The composition is flawless. A true masterpiece!",
				createdAt: "2024-01-19",
				rating: 5,
			},
			{
				name: "Grace Liu",
				image:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				comment:
					"I can't stop looking at this. It's so peaceful and beautiful.",
				createdAt: "2024-01-18",
				rating: 5,
			},
		],
		sizes: ["XS", "S", "M", "L", "XL"],
		category: "Socks",
		gender: "Women",
	},
	{
		id: 8,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
		alt: "Gallery Image 8",
		height: "h-44",
		name: "Lakeside Retreat",
		price: "$129.00",
		rating: 4.3,
		description: "A tranquil lake reflecting autumn trees.",
		comments: [
			{
				name: "Amanda Foster",
				image:
					"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
				comment: "The reflection is perfect! So serene and calming.",
				createdAt: "2024-01-22",
				rating: 4,
			},
			{
				name: "Brian Scott",
				image:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				comment: "Autumn colors are captured beautifully here.",
				createdAt: "2024-01-21",
				rating: 4,
			},
			{
				name: "Catherine Bell",
				image:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
				comment: "This would be perfect for my meditation room.",
				createdAt: "2024-01-20",
				rating: 5,
			},
		],
		sizes: ["S", "M", "L", "XL"],
		category: "Jeans/Trousers/Pants",
		gender: "Men",
	},
	{
		id: 9,
		src: "https://uwipckr69n.ufs.sh/f/6a5ARX41rbOZhJFP3nzYHmOsdEnrkew7CSFNIxtcBL9vRVQD",
		alt: "Gallery Image 9",
		height: "h-68",
		name: "Green Yellow Patcher",
		price: "$105.00",
		rating: 4.5,
		description: "Classy green yellow patches shirt",
		comments: [
			{
				name: "Robert King",
				image:
					"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
				comment: "The golden light is absolutely stunning!",
				createdAt: "2024-01-23",
				rating: 5,
			},
			{
				name: "Michelle Adams",
				image:
					"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
				comment: "This reminds me of my childhood in the countryside.",
				createdAt: "2024-01-22",
				rating: 4,
			},
		],
		sizes: ["XS", "S", "M", "L", "XL", "XXL"],
		category: "Tshirts",
		gender: "Kids",
	},
	{
		id: 10,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
		alt: "Gallery Image 10",
		height: "h-36",
		name: "City Lights",
		price: "$190.00",
		rating: 4.8,
		description: "A city skyline lit up against the night sky.",
		comments: [
			{
				name: "Steven Wright",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				comment: "The city never sleeps! This captures the energy perfectly.",
				createdAt: "2024-01-24",
				rating: 5,
			},
			{
				name: "Jennifer Hall",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
				comment: "Love the contrast between the dark sky and bright lights.",
				createdAt: "2024-01-23",
				rating: 4,
			},
			{
				name: "Michael Turner",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				comment: "Perfect for my office wall. Very inspiring!",
				createdAt: "2024-01-22",
				rating: 5,
			},
			{
				name: "Laura Mitchell",
				image:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				comment: "The architectural details are incredible.",
				createdAt: "2024-01-21",
				rating: 4,
			},
		],
		sizes: ["S", "M", "L", "XL"],
		category: "Hoodies",
		gender: "Women",
	},
	{
		id: 11,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
		alt: "Gallery Image 11",
		height: "h-80",
		name: "Meadow Walk",
		price: "$80.00",
		rating: 4.1,
		description: "Wildflowers and tall grass by a sunny trail.",
		comments: [
			{
				name: "Andrew Cooper",
				image:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				comment: "So peaceful and natural. Perfect for relaxation.",
				createdAt: "2024-01-25",
				rating: 4,
			},
			{
				name: "Samantha Reed",
				image:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
				comment: "The wildflowers add such beautiful color to the scene.",
				createdAt: "2024-01-24",
				rating: 4,
			},
			{
				name: "Jason Brooks",
				image:
					"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
				comment: "This makes me want to go for a nature walk right now!",
				createdAt: "2024-01-23",
				rating: 5,
			},
		],
		sizes: ["XS", "S", "M", "L", "XL"],
		category: "Socks",
		gender: "Men",
	},
	{
		id: 12,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
		alt: "Gallery Image 12",
		height: "h-48",
		name: "Winter Solace",
		price: "$100.00",
		rating: 4.6,
		description: "A peaceful snowy landscape under soft clouds.",
		comments: [
			{
				name: "Nicole Price",
				image:
					"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
				comment: "The snow looks so soft and inviting. Beautiful winter scene!",
				createdAt: "2024-01-26",
				rating: 5,
			},
			{
				name: "Timothy Wood",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				comment: "Perfect for the holiday season. Very cozy and peaceful.",
				createdAt: "2024-01-25",
				rating: 4,
			},
			{
				name: "Victoria Hill",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
				comment: "The clouds add such a dreamy quality to this photo.",
				createdAt: "2024-01-24",
				rating: 5,
			},
			{
				name: "Patrick Young",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				comment: "This captures the quiet beauty of winter perfectly.",
				createdAt: "2024-01-23",
				rating: 4,
			},
		],
		sizes: ["XS", "S", "M", "L", "XL"],
		category: "Caps",
		gender: "Women",
	},
	{
		id: 13,
		src: "https://uwipckr69n.ufs.sh/f/6a5ARX41rbOZk6xCo5IPDc9o3fvzBsxOpbJqdEj7IAURQ6NK",
		alt: "Gallery Image 13",
		height: "h-56",
		name: "Urban Explorer",
		price: "$135.00",
		rating: 4.3,
		description: "Modern cityscape with architectural beauty.",
		comments: [
			{
				name: "Alex Turner",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				comment: "Perfect blend of modern and classic design!",
				createdAt: "2024-01-27",
				rating: 4,
			},
			{
				name: "Sophie Wilson",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
				comment: "The architectural details are absolutely stunning.",
				createdAt: "2024-01-26",
				rating: 5,
			},
		],
		sizes: ["S", "M", "L", "XL"],
		category: "Tshirts",
		gender: "Men",
	},
	{
		id: 14,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
		alt: "Gallery Image 14",
		height: "h-64",
		name: "Floral Dreams",
		price: "$95.00",
		rating: 4.7,
		description: "Beautiful floral patterns in soft pastels.",
		comments: [
			{
				name: "Emma Davis",
				image:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				comment: "So feminine and elegant! Perfect for spring.",
				createdAt: "2024-01-28",
				rating: 5,
			},
			{
				name: "Michael Brown",
				image:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				comment: "The colors are so vibrant and cheerful.",
				createdAt: "2024-01-27",
				rating: 4,
			},
			{
				name: "Lisa Chen",
				image:
					"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
				comment: "This would be perfect for my daughter's room.",
				createdAt: "2024-01-26",
				rating: 5,
			},
		],
		sizes: ["XS", "S", "M", "L"],
		category: "Hoodies",
		gender: "Kids",
	},
	{
		id: 15,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
		alt: "Gallery Image 15",
		height: "h-48",
		name: "Denim Classic",
		price: "$110.00",
		rating: 4.5,
		description: "Timeless denim with perfect fit and comfort.",
		comments: [
			{
				name: "David Kim",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				comment: "Classic denim never goes out of style!",
				createdAt: "2024-01-29",
				rating: 4,
			},
			{
				name: "Rachel Green",
				image:
					"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
				comment: "Perfect fit and great quality material.",
				createdAt: "2024-01-28",
				rating: 5,
			},
		],
		sizes: ["S", "M", "L", "XL", "XXL"],
		category: "Jeans/Trousers/Pants",
		gender: "Women",
	},
	{
		id: 16,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
		alt: "Gallery Image 16",
		height: "h-72",
		name: "Cozy Comfort",
		price: "$85.00",
		rating: 4.8,
		description: "Ultra-soft fabric for maximum comfort and warmth.",
		comments: [
			{
				name: "James Wilson",
				image:
					"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
				comment: "So comfortable! Perfect for lounging around.",
				createdAt: "2024-01-30",
				rating: 5,
			},
			{
				name: "Anna Thompson",
				image:
					"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
				comment: "The softness is incredible. Highly recommend!",
				createdAt: "2024-01-29",
				rating: 5,
			},
			{
				name: "Tom Brown",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				comment: "Great quality and perfect for cold weather.",
				createdAt: "2024-01-28",
				rating: 4,
			},
		],
		sizes: ["XS", "S", "M", "L", "XL"],
		category: "Socks",
		gender: "Men",
	},
	{
		id: 17,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
		alt: "Gallery Image 17",
		height: "h-60",
		name: "Sporty Style",
		price: "$75.00",
		rating: 4.2,
		description: "Athletic-inspired design with modern functionality.",
		comments: [
			{
				name: "Jessica Lee",
				image:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				comment: "Perfect for workouts and casual wear!",
				createdAt: "2024-01-31",
				rating: 4,
			},
			{
				name: "Chris Anderson",
				image:
					"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				comment: "Great for active lifestyle. Very comfortable.",
				createdAt: "2024-01-30",
				rating: 4,
			},
		],
		sizes: ["S", "M", "L", "XL"],
		category: "Caps",
		gender: "Kids",
	},
];

const blogs = [
	{
		id: 1,
		title: "The Art of Fashion Photography",
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
		description:
			"Exploring the creative process behind stunning fashion photography and how it shapes modern style.",
		content:
			"Fashion photography is more than just capturing clothes; it's about telling a story, evoking emotions, and creating art that resonates with viewers. In this comprehensive guide, we delve into the techniques, lighting, composition, and creative vision that make fashion photography truly exceptional.\n\nFrom understanding your subject to working with models, styling, and post-production, every element plays a crucial role in creating compelling fashion imagery. We'll explore how top photographers approach their craft and share practical tips for aspiring fashion photographers.\n\nWhether you're a beginner looking to break into fashion photography or an experienced photographer wanting to refine your skills, this article provides valuable insights into the art and business of fashion photography.",
		date: "2024-01-20",
		author: "Sarah Johnson",
		category: "Photography",
	},
	{
		id: 2,
		title: "Sustainable Fashion: A Complete Guide",
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
		description:
			"Learn about eco-friendly fashion choices and how to build a sustainable wardrobe that's both stylish and responsible.",
		content:
			"Sustainable fashion is no longer just a trend—it's a necessity for our planet's future. This comprehensive guide covers everything you need to know about making environmentally conscious fashion choices.\n\nWe'll explore the environmental impact of fast fashion, the benefits of sustainable materials, and how to identify truly eco-friendly brands. From organic cotton to recycled polyester, understanding different sustainable materials is key to making informed choices.\n\nBuilding a sustainable wardrobe doesn't mean sacrificing style. We'll show you how to create timeless, versatile pieces that last for years while reducing your environmental footprint. Learn about capsule wardrobes, quality over quantity, and how to care for your clothes to extend their lifespan.\n\nJoin the movement towards a more sustainable fashion industry and discover how your choices can make a positive impact on the world.",
		date: "2024-01-18",
		author: "Michael Chen",
		category: "Sustainability",
	},
	{
		id: 3,
		title: "Street Style Trends for 2024",
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
		description:
			"Discover the hottest street style trends taking over fashion capitals around the world this year.",
		content:
			"Street style continues to be the driving force behind fashion innovation, with 2024 bringing fresh perspectives and bold new trends. From oversized silhouettes to vibrant color palettes, this year's street style is all about self-expression and individuality.\n\nWe've scoured the streets of New York, London, Paris, and Tokyo to bring you the most influential trends. Expect to see a mix of nostalgic 90s references, futuristic elements, and sustainable fashion choices making their mark.\n\nKey trends include:\n• Oversized blazers and statement coats\n• Bold color blocking and neon accents\n• Sustainable materials and vintage finds\n• Gender-fluid styling and inclusive fashion\n• Tech-inspired accessories and footwear\n\nLearn how to incorporate these trends into your personal style while staying true to your unique aesthetic. Street style is about confidence, creativity, and making fashion your own.",
		date: "2024-01-15",
		author: "Emma Rodriguez",
		category: "Trends",
	},
	{
		id: 4,
		title: "The Psychology of Color in Fashion",
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
		description:
			"Understanding how colors affect our mood, perception, and style choices in fashion and personal branding.",
		content:
			"Color is one of the most powerful tools in fashion, influencing not just how we look, but how we feel and how others perceive us. This deep dive into color psychology reveals the science behind our color choices and their impact on our daily lives.\n\nDifferent colors evoke different emotions and associations:\n\nRed: Confidence, passion, and energy. Perfect for making a bold statement or boosting confidence.\nBlue: Trust, stability, and professionalism. Ideal for business settings and creating a calming effect.\nGreen: Growth, harmony, and nature. Associated with balance and renewal.\nYellow: Optimism, creativity, and happiness. Great for brightening moods and standing out.\nPurple: Luxury, creativity, and spirituality. Often associated with royalty and artistic expression.\nBlack: Sophistication, mystery, and elegance. A timeless choice for creating sleek, powerful looks.\n\nUnderstanding color theory helps you make intentional choices about your wardrobe and personal style. Learn about color combinations, seasonal color analysis, and how to use color to enhance your natural features and express your personality.",
		date: "2024-01-12",
		author: "David Park",
		category: "Psychology",
	},
	{
		id: 5,
		title: "Building a Capsule Wardrobe",
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
		description:
			"Create a minimalist wardrobe with versatile pieces that work together to create endless outfit combinations.",
		content:
			"A capsule wardrobe is a carefully curated collection of essential clothing items that can be mixed and matched to create a variety of outfits. This minimalist approach to fashion promotes sustainability, reduces decision fatigue, and helps you develop a more cohesive personal style.\n\nBuilding an effective capsule wardrobe requires thoughtful planning and understanding of your lifestyle, personal style, and color preferences. Here's how to get started:\n\n1. Assess Your Lifestyle: Consider your daily activities, work environment, and social commitments to determine what types of clothing you actually need.\n\n2. Choose Your Color Palette: Select 2-3 base colors (like black, navy, or gray) and 2-3 accent colors that complement your skin tone and personal preferences.\n\n3. Invest in Quality Basics: Focus on well-made, timeless pieces that will last for years rather than trendy items that quickly go out of style.\n\n4. Plan for Versatility: Choose pieces that can be dressed up or down and work across different seasons and occasions.\n\nEssential capsule wardrobe pieces typically include:\n• A well-fitted blazer\n• Classic white button-down shirt\n• Dark wash jeans\n• Little black dress\n• Comfortable flats and heels\n• Quality coat or jacket\n\nA successful capsule wardrobe should contain 30-40 pieces that can create dozens of different outfits, making getting dressed easier and more enjoyable.",
		date: "2024-01-10",
		author: "Lisa Thompson",
		category: "Minimalism",
	},
	{
		id: 6,
		title: "Fashion Technology: The Future is Here",
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
		description:
			"Explore how technology is revolutionizing fashion, from smart fabrics to virtual try-ons and sustainable innovations.",
		content:
			"Technology is transforming every aspect of the fashion industry, from design and production to retail and consumer experience. This comprehensive look at fashion technology reveals the innovations shaping the future of style.\n\nSmart Fabrics and Wearables:\nModern fashion incorporates technology in ways that were unimaginable just a decade ago. Smart fabrics can monitor health metrics, adjust temperature, and even change color based on environmental conditions. Wearable technology seamlessly integrates into everyday clothing, making fashion both functional and fashionable.\n\nVirtual and Augmented Reality:\nVirtual try-on technology allows customers to see how clothes look and fit without physically trying them on. AR mirrors in stores provide instant styling suggestions, while virtual fashion shows bring runway experiences to global audiences.\n\nSustainable Technology:\nInnovations in sustainable fashion technology include:\n• Lab-grown leather and silk alternatives\n• Waterless dyeing processes\n• Recycled material innovations\n• Carbon-neutral production methods\n\n3D Printing and Customization:\n3D printing enables rapid prototyping, custom sizing, and even on-demand production. This technology reduces waste, allows for personalization, and opens new possibilities for unique designs.\n\nThe future of fashion technology promises more personalized, sustainable, and interactive experiences, revolutionizing how we design, produce, and consume fashion.",
		date: "2024-01-08",
		author: "Alex Kim",
		category: "Technology",
	},
];

const categoriesTabs = [
	{
		name: "All",
		id: "all",
		icon: ShoppingCart,
	},
	{
		name: "Tshirts",
		id: "tshirts",
		icon: Shirt,
	},
	{
		name: "Hoodies",
		id: "hoodies",
		icon: PiHoodie,
	},
	{
		name: "Jeans/Trousers/Pants",
		id: "jeans",
		icon: PiPants, // Using ShoppingCart as placeholder for pants
	},
	{
		name: "Socks",
		id: "socks",
		icon: FaSocks,
	},
	{
		name: "Caps",
		id: "caps",
		icon: FaHatCowboy,
	},
];

const gendersTabs = [
	{
		name: "All",
		id: "all",
		icon: ShoppingCart,
	},
	{
		name: "Men",
		id: "men",
		icon: FaMale,
	},
	{
		name: "Women",
		id: "women",
		icon: FaFemale,
	},
	{
		name: "Kids",
		id: "kids",
		icon: FaChild,
	},
];

const DarkyClothersShop = () => {
	const [activeImage, setActiveImage] = useState(null);
	const [categories, setCategories] = useState("All");
	const [gender, setGender] = useState("All");
	const [search, setSearch] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Get current category icon
	const getCurrentCategoryIcon = () => {
		const currentCategory = categoriesTabs.find(
			(cat) => cat.name === categories
		);
		return currentCategory ? currentCategory.icon : ShoppingCart;
	};

	const [subscribeModal, setShowSubscribeModal] = useState(false);
	const [cartModal, setShowCartModal] = useState(false);
	const [accountModal, setShowAccountModal] = useState(false);
	const [blogsModal, setShowBlogsModal] = useState(false);
	const [selectedBlog, setSelectedBlog] = useState(null);
	const [selectedSize, setSelectedSize] = useState(null);
	const [helpModal, setShowHelpModal] = useState(false);
	const [authModal, setShowAuthModal] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [user, setUser] = useState(null);
	const [previousOrders, setPreviousOrders] = useState([
		{
			id: 1,
			orderNumber: "ORD-001",
			date: "2024-01-15",
			status: "Delivered",
			items: [
				{
					id: 1,
					src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
					alt: "Gallery Image 1",
					name: "Sunset Vista",
					price: "$120.00",
					description: "A beautiful sunset over the ocean.",
				},
				{
					id: 2,
					src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
					alt: "Gallery Image 2",
					name: "Mountain Peaks",
					price: "$150.00",
					description: "Snow-capped peaks rising above wooded valleys.",
				},
			],
			total: "$270.00",
		},
		{
			id: 2,
			orderNumber: "ORD-002",
			date: "2024-01-10",
			status: "Shipped",
			items: [
				{
					id: 3,
					src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
					alt: "Gallery Image 3",
					name: "Desert Mirage",
					price: "$99.00",
					description: "Vast dunes under a shimmering blue sky.",
				},
			],
			total: "$99.00",
		},
		{
			id: 3,
			orderNumber: "ORD-003",
			date: "2024-01-05",
			status: "Processing",
			items: [
				{
					id: 4,
					src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
					alt: "Gallery Image 4",
					name: "Forest Path",
					price: "$85.00",
					description: "A winding path through a sun-dappled forest.",
				},
				{
					id: 5,
					src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
					alt: "Gallery Image 5",
					name: "Ocean Breeze",
					price: "$99.00",
					description: "Gentle waves and salty air by the seashore.",
				},
			],
			total: "$184.00",
		},
	]);
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
			alt: "Gallery Image 1",
			name: "Sunset Vista",
			price: "$120.00",
			description: "A beautiful sunset over the ocean.",
			category: "Tshirts",
			gender: "Men",
		},
		{
			id: 2,
			src: "https://uwipckr69n.ufs.sh/f/6a5ARX41rbOZQNLqOkzAT2bjmHd3CvNgDKAyscp5VYk7wOXL",
			alt: "Gallery Image 2",
			name: "Mountain Peaks",
			price: "$150.00",
			description: "Snow-capped peaks rising above wooded valleys.",
			category: "Hoodies",
			gender: "Women",
		},
		{
			id: 13,
			src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
			alt: "Gallery Image 13",
			name: "Urban Explorer",
			price: "$135.00",
			description: "Modern cityscape with architectural beauty.",
			category: "Tshirts",
			gender: "Men",
		},
	]);

	return (
		<div className="w-full bg-black p-2 min-h-screen">
			<div className="max-w-7xl mx-auto px-2 bg-black/90 backdrop-blur-sm flex items-center justify-between">
				<a href="/" className="text-white text-lg font-bold">
					Dashy
				</a>
				<div className="flex gap-4 items-center">
					{/* Twitter */}
					<a
						href="https://twitter.com/darky"
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-400 hover:text-white transition-colors duration-200"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
						</svg>
					</a>
					{/* Pinterest */}
					<a
						href="https://pinterest.com/darky"
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-400 hover:text-white transition-colors duration-200"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
						</svg>
					</a>
					{/* Instagram */}
					<a
						href="https://instagram.com/darky"
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-400 hover:text-white transition-colors duration-200"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
						</svg>
					</a>
				</div>
			</div>
			<div className="flex gap-2 items-start justify-between w-full p-2 my-4 max-w-7xl mx-auto flex-wrap">
				<div className="flex gap-2 w-fit items-center">
					<input
						type="text"
						placeholder="Search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="text-zinc-400 placeholder-zinc-400 w-fit text-xs border border-zinc-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:border-transparent rounded-xl px-4 py-2 font-semibold transition-all duration-300 ease-in"
					/>
				</div>
				<div
					className="flex gap-4 relative md:flex-row flex-col items-start"
					ref={dropdownRef}
				>
					<div className="flex gap-2 items-center flex-wrap">
						{gendersTabs.map((item, index) => {
							return (
								<button
									key={index}
									onClick={() => setGender(item.name)}
									className={`flex min-w-10 text-xs border border-zinc-200 rounded-full px-4 py-1.5 font-semibold transition-all duration-300 ease-in ${
										gender === item.name
											? "bg-zinc-200 text-black hover:bg-zinc-200 hover:text-black"
											: "bg-transparent text-zinc-200"
									}`}
								>
									<item.icon className="w-4 h-4" />
									{item.name}
								</button>
							);
						})}
					</div>
					<button
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className="flex items-center gap-2 text-xs border border-zinc-200 rounded-full px-4 py-1.5 font-semibold transition-all duration-300 ease-in bg-transparent text-zinc-200 hover:bg-zinc-200 hover:text-black"
					>
						{React.createElement(getCurrentCategoryIcon(), {
							className: "w-4 h-4",
						})}
						{categories}
						<svg
							className={`w-4 h-4 transition-transform duration-300 ${
								isDropdownOpen ? "rotate-180" : ""
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					<AnimatePresence>
						{isDropdownOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: -10, scale: 0.95 }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								className="absolute top-full md:left-0 sm:right-0 xxs:right-0 xs:right-0 mt-2 bg-black border border-zinc-200 rounded-xl shadow-lg z-50 min-w-48"
							>
								<div className="py-2">
									{categoriesTabs.map((item, index) => {
										const IconComponent = item.icon;
										return (
											<button
												key={index}
												onClick={() => {
													setCategories(item.name);
													setIsDropdownOpen(false);
												}}
												className={`w-full flex items-center gap-3 text-left text-xs px-4 py-2 font-semibold transition-all duration-300 ease-in ${
													categories === item.name
														? "bg-zinc-200 text-black"
														: "text-zinc-200 hover:bg-zinc-800"
												}`}
											>
												<IconComponent className="w-4 h-4" />
												{item.name}
											</button>
										);
									})}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
			{/* Masonry Grid */}
			<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
				{images
					.filter((image) => {
						const categoryMatch =
							categories === "All" || image.category === categories;
						const genderMatch = gender === "All" || image.gender === gender;

						// Search filter
						const searchMatch =
							search === "" ||
							image.name.toLowerCase().includes(search.toLowerCase()) ||
							image.description.toLowerCase().includes(search.toLowerCase()) ||
							image.category.toLowerCase().includes(search.toLowerCase()) ||
							image.gender.toLowerCase().includes(search.toLowerCase());

						return categoryMatch && genderMatch && searchMatch;
					})
					.map((image, index) => (
						<motion.div
							key={image.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="break-inside-avoid mb-4"
						>
							<div
								onClick={() => setActiveImage(image)}
								className="cursor-pointer group"
							>
								<img
									src={image.src}
									alt={image.alt}
									className={`w-full h-full object-cover rounded-3xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}
								/>
							</div>
						</motion.div>
					))}
			</div>

			<hr className="my-8 border-zinc-800 w-full" />
			{/* Footer */}
			<footer className="max-w-7xl mx-auto mt-16 mb-8 px-4">
				<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
					{/* Left Side - Brand & Description */}
					<div className="flex flex-col items-start space-y-4">
						<h2 className="text-2xl font-bold text-white">Darky</h2>
						<p className="text-zinc-400 text-sm max-w-md leading-relaxed">
							Discover premium fashion that defines your style. From trendy
							streetwear to elegant classics, we curate the finest collection
							for the modern individual who values quality and authenticity.
						</p>
						{/* Social Media Icons */}
						<div className="flex gap-4 items-center">
							{/* Twitter */}
							<a
								href="https://twitter.com/darky"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-400 hover:text-white transition-colors duration-200"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
								</svg>
							</a>
							{/* Pinterest */}
							<a
								href="https://pinterest.com/darky"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-400 hover:text-white transition-colors duration-200"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
								</svg>
							</a>
							{/* Instagram */}
							<a
								href="https://instagram.com/darky"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-400 hover:text-white transition-colors duration-200"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
						</div>
					</div>

					{/* Right Side - Navigation Links */}
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
						{/* Quick Links */}
						<div className="flex flex-col space-y-3">
							<h3 className="text-white font-semibold text-sm uppercase tracking-wider">
								Quick Links
							</h3>
							<div className="flex flex-col space-y-2">
								<button
									onClick={() => setShowBlogsModal(true)}
									className="text-zinc-400 hover:text-white transition-colors duration-200 text-left text-sm"
								>
									Blog
								</button>
								<button
									onClick={() => setShowSubscribeModal(true)}
									className="text-zinc-400 hover:text-white transition-colors duration-200 text-left text-sm"
								>
									Subscribe
								</button>
								<button
									onClick={() => setShowHelpModal(true)}
									className="text-zinc-400 hover:text-white transition-colors duration-200 text-left text-sm"
								>
									Help
								</button>
							</div>
						</div>

						{/* Support */}
						<div className="flex flex-col space-y-3">
							<h3 className="text-white font-semibold text-sm uppercase tracking-wider">
								Support
							</h3>
							<div className="flex flex-col space-y-2">
								<button
									onClick={() => setShowHelpModal(true)}
									className="text-zinc-400 hover:text-white transition-colors duration-200 text-left text-sm"
								>
									FAQ
								</button>
								<a
									href="#privacy"
									className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
								>
									Privacy Policy
								</a>
								<a
									href="#terms"
									className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
								>
									Terms & Conditions
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Border */}
				<div className="mt-8 pt-6 border-t border-zinc-800">
					<p className="text-center text-zinc-500 text-sm">
						© 2024 Darky. All rights reserved. Crafted with passion for
						fashion.
					</p>
				</div>
			</footer>

			<motion.div
				className="flex gap-8 items-center justify-center fixed md:bottom-10 -bottom-1 px-4 py-4 rounded-xl bg-black/90 w-fit left-0 right-0 mx-auto"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
			>
				<button
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						});
					}}
					className="text-zinc-200 hover:text-white transition-colors duration-200"
				>
					Dashy
				</button>
				<div className="flex gap-1 items-center">
					<button
						onClick={() => setShowBlogsModal(true)}
						className="group flex gap-2 items-center bg-black/50 text-xs text-white hover:text-black border border-zinc-800 hover:bg-zinc-50 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer"
					>
						<FaBlog className="w-3 h-3 text-zinc-200 group-hover:text-zinc-900" />
						<span className="hidden md:block">Blog</span>
					</button>
					<button
						onClick={() => setShowSubscribeModal(true)}
						className="group bg-black/50 text-sm border border-zinc-800  text-white hover:text-black hover:bg-zinc-100 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer flex gap-2 items-center"
					>
						<FaEnvelope className="w-3 h-3 text-zinc-200 group-hover:text-zinc-900" />
						<span className="hidden md:block">Subscribe</span>
					</button>
					{isAuthenticated && (
						<button
							onClick={() => setShowCartModal(true)}
							className="group bg-black/50 text-sm border border-zinc-800  text-white hover:text-black hover:bg-zinc-100 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer flex gap-2 items-center relative"
						>
							<ShoppingCart className="w-3 h-3 text-zinc-200 group-hover:text-zinc-900" />
							{cartItems.length > 0 && (
								<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
									{cartItems.length}
								</span>
							)}
							<span className="hidden md:block">Cart</span>
						</button>
					)}
					<button
						onClick={() => setShowHelpModal(true)}
						className="group bg-black/50 text-sm border border-zinc-800 flex gap-2 items-center text-white hover:text-black hover:bg-zinc-100 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer"
					>
						<FaQuestion className="w-3 h-3 text-zinc-200 group-hover:text-zinc-900" />
						<span className="hidden md:block">Help</span>
					</button>
				</div>
				<div className="flex gap-2 items-center">
					{isAuthenticated ? (
						<img
							onClick={() => setShowAccountModal(true)}
							src={
								user?.photoURL ||
								"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
							}
							alt={user?.displayName || "User Avatar"}
							className="w-10 h-10 rounded-full object-cover border border-zinc-400 p-1 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in cursor-pointer"
						/>
					) : (
						<button
							onClick={() => setShowAuthModal(true)}
							className="group bg-black/50 text-sm border border-zinc-800 flex gap-2 items-center text-white hover:text-black hover:bg-zinc-100 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer"
						>
							<FaUser className="w-3 h-3 text-zinc-200 group-hover:text-zinc-900" />
							<span className="hidden md:block">Login</span>
						</button>
					)}
				</div>
			</motion.div>

			{/* Modal */}
			<AnimatePresence>
				{activeImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						onClick={() => setActiveImage(null)}
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						{/* Image */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="relative max-w-4xl max-h-full"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex flex-col lg:flex-row gap-8 items-start h-auto max-h-[80vh] overflow-auto">
								{/* Left Side - Image and Details */}
								<div className="flex flex-col gap-6 flex-1">
									<img
										src={activeImage.src}
										alt="Enlarged view"
										className="w-full max-h-96 object-cover rounded-2xl shadow-2xl"
									/>

									<div className="text-white space-y-4">
										<h3 className="text-4xl lg:text-7xl font-bold">
											{activeImage.name}
										</h3>
										<p className="text-lg lg:text-xl">
											{activeImage.description}
										</p>
										<div className="flex gap-2 items-center">
											<p className="text-yellow-400 border border-yellow-400 px-2 py-1 rounded-xl w-fit flex gap-2 items-center">
												<Star className="w-4 h-4" /> {activeImage.rating}
											</p>
										</div>
									</div>
								</div>

								{/* Right Side - Size Selection and Comments */}
								<div className="w-full lg:w-96 space-y-4">
									{/* Size Selection */}
									<div className="space-y-3">
										<h4 className="text-lg font-semibold text-white">
											Select Size
										</h4>
										<div className="flex flex-wrap gap-2">
											{activeImage.sizes.map((size) => (
												<button
													key={size}
													onClick={() => setSelectedSize(size)}
													className={`min-w-10 text-xs border border-zinc-200 rounded-full px-4 py-1.5 font-semibold transition-all duration-300 ease-in ${
														selectedSize === size
															? "bg-zinc-200 text-black hover:bg-zinc-200 hover:text-black"
															: "bg-transparent text-zinc-200 hover:bg-zinc-200 hover:text-black"
													}`}
												>
													{size}
												</button>
											))}
										</div>
									</div>

									{/* Comments */}
									<div className="space-y-3">
										<h4 className="text-xl font-semibold text-white mb-4">
											Comments
										</h4>
										<div className="space-y-4 max-h-96 overflow-auto">
											{activeImage.comments.map((comment, index) => (
												<div
													key={index}
													className="bg-black/30 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 space-y-3"
												>
													{/* Comment Header */}
													<div className="flex items-center gap-3">
														<img
															src={comment.image}
															alt={comment.name}
															className="w-8 h-8 rounded-full object-cover"
														/>
														<div className="flex-1">
															<h5 className="font-semibold text-zinc-200 text-sm">
																{comment.name}
															</h5>
															<p className="text-xs text-zinc-400">
																{comment.createdAt}
															</p>
														</div>
														{comment.rating && (
															<div className="flex items-center gap-1">
																<Star className="w-3 h-3 text-yellow-400 fill-current" />
																<span className="text-xs text-yellow-400">
																	{comment.rating}
																</span>
															</div>
														)}
													</div>

													{/* Comment Content */}
													<p className="text-zinc-300 text-sm leading-relaxed">
														{comment.comment}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<motion.div
								className="flex gap-4 items-center justify-center fixed bottom-10 px-4 py-4 rounded-xl bg-black/50 w-fit left-0 right-0 mx-auto"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<img
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
									className="w-10 h-10 rounded-full object-cover border border-zinc-400 p-1 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in cursor-pointer"
								/>
								<button className="bg-zinc-200 text-sm text-black hover:bg-zinc-50 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer">
									Buy {activeImage.price}
								</button>
								{isAuthenticated && (
									<button
										onClick={() => {
											const newItem = {
												id: activeImage.id,
												src: activeImage.src,
												alt: activeImage.alt,
												name: activeImage.name,
												price: activeImage.price,
												description: activeImage.description,
												category: activeImage.category,
												gender: activeImage.gender,
											};
											setCartItems((prev) => [...prev, newItem]);
											setActiveImage(null);
										}}
										className="bg-transparent border text-sm border-zinc-400 text-white hover:text-black hover:bg-zinc-100 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer flex gap-2 items-center"
									>
										<ShoppingCart className="w-4 h-4" /> Add to Cart
									</button>
								)}
								{/* Close Button */}
								<button
									onClick={() => setActiveImage(null)}
									className="w-8 h-8 mx-auto border border-zinc-400 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{subscribeModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						<div className="relative mx-auto mb-10">
							<button
								onClick={() => setShowSubscribeModal(false)}
								className="w-8 h-8 mx-auto border border-zinc-900 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", duration: 0.3 }}
							className="relative w-full max-w-md bg-black/90 rounded-xl border border-zinc-900 shadow-xl p-4 space-y-4 text-zinc-200"
						>
							<div className="flex items-center justify-between w-full my-4">
								<div className="space-y-1">
									<h2 className="text-lg font-bold">Subscribe</h2>
									<p className="text-sm">
										Get new releases and exclusive offers.
									</p>
								</div>
							</div>
							<input
								type="email"
								placeholder="Email"
								className="w-full border border-zinc-800 rounded-xl p-2 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-transparent"
							/>
							<button
								onClick={() => setShowSubscribeModal(false)}
								className="w-full bg-white text-black hover:shadow-xl hover:shadow-zinc-700 hover:font-semibold transition-all duration-100 ease-in rounded-xl p-2"
							>
								Subscribe
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Cart Modal */}
			<AnimatePresence>
				{cartModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 "
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						<div className="relative mx-auto mb-10 overflow-auto">
							<button
								onClick={() => setShowCartModal(false)}
								className="w-8 h-8 mx-auto border border-zinc-900 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* Cart Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", duration: 0.3 }}
							className="relative w-full max-w-2xl bg-black/90 rounded-xl border border-zinc-900 shadow-xl p-6 space-y-6 text-zinc-200 overflow-auto"
						>
							<div className="flex items-center justify-between w-full">
								<div className="space-y-1">
									<h2 className="text-lg font-bold">Shopping Cart</h2>
									<p className="text-sm">Review your items before checkout.</p>
								</div>
							</div>

							{/* Cart Accordion */}
							<details className="group border border-zinc-800 rounded-xl overflow-hidden">
								<summary className="flex items-center justify-between p-4 cursor-pointer bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-200">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8  rounded-xl flex items-center justify-center">
											<ShoppingCart className="w-4 h-4 text-zinc-300" />
										</div>
										<div>
											<h3 className="font-semibold text-zinc-200">
												Cart ({cartItems.length})
											</h3>
											<p className="text-sm text-zinc-400">
												Review your selected items
											</p>
										</div>
									</div>
									<svg
										className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<div className="p-4 border-t border-zinc-800">
									<div className="space-y-4">
										{cartItems.map((item, index) => (
											<div
												key={item.id}
												className="flex items-center gap-4 p-4 border border-zinc-800 rounded-xl"
											>
												{/* Image */}
												<div className="flex-shrink-0">
													<img
														src={item.src}
														alt={item.alt}
														className="w-20 h-20 object-cover rounded-xl"
													/>
												</div>

												{/* Content */}
												<div className="flex-1 space-y-2">
													<h3 className="font-semibold text-zinc-200">
														{item.name}
													</h3>
													<p className="text-sm text-zinc-400">
														{item.description}
													</p>
													<p className="text-lg font-bold text-white">
														{item.price}
													</p>
												</div>

												{/* Remove Button */}
												<button
													onClick={() => {
														setCartItems((prev) =>
															prev.filter((cartItem) => cartItem.id !== item.id)
														);
													}}
													className="flex-shrink-0 p-2 border border-zinc-600 hover:border-red-400 hover:bg-red-400/10 text-zinc-400 hover:text-red-400 rounded-xl transition-all duration-200"
												>
													<Trash2 className="w-4 h-4" />
												</button>
											</div>
										))}
									</div>
								</div>
							</details>

							{/* User Address Accordion */}
							<details className="group border border-zinc-800 rounded-xl overflow-hidden">
								<summary className="flex items-center justify-between p-4 cursor-pointer bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-200">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8  rounded-xl flex items-center justify-center">
											<svg
												className="w-4 h-4 text-zinc-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-zinc-200">
												Delivery Address
											</h3>
											<p className="text-sm text-zinc-400">
												Manage your shipping information
											</p>
										</div>
									</div>
									<svg
										className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<div className="p-4 border-t border-zinc-800 space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												Full Name
											</label>
											<input
												type="text"
												placeholder="John Doe"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												Phone Number
											</label>
											<input
												type="tel"
												placeholder="+1 (555) 123-4567"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Street Address
										</label>
										<input
											type="text"
											placeholder="123 Main Street, Apt 4B"
											className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
										/>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												City
											</label>
											<input
												type="text"
												placeholder="New York"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												State
											</label>
											<input
												type="text"
												placeholder="NY"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												ZIP Code
											</label>
											<input
												type="text"
												placeholder="10001"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Country
										</label>
										<select className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50">
											<option value="">Select Country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="UK">United Kingdom</option>
											<option value="AU">Australia</option>
										</select>
									</div>
								</div>
							</details>

							{/* Total and Pay Now */}
							<div className="space-y-4">
								<div className="flex justify-between items-center p-4 border border-zinc-800 rounded-xl">
									<span className="text-lg font-semibold">Total:</span>
									<span className="text-xl font-bold text-white">
										$
										{cartItems
											.reduce(
												(total, item) =>
													total + parseFloat(item.price.replace("$", "")),
												0
											)
											.toFixed(2)}
									</span>
								</div>

								<button
									onClick={() => setShowCartModal(false)}
									className="w-full bg-white text-black hover:shadow-xl hover:shadow-zinc-700 hover:font-semibold transition-all duration-100 ease-in rounded-xl p-3 text-lg font-semibold"
								>
									Pay Now
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Account Modal */}
			<AnimatePresence>
				{accountModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						<div className="relative mx-auto mb-10">
							<button
								onClick={() => setShowAccountModal(false)}
								className="w-8 h-8 mx-auto border border-zinc-900 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* Account Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", duration: 0.3 }}
							className="relative w-full max-w-2xl bg-black/90 rounded-xl border border-zinc-900 shadow-xl p-6 space-y-6 text-zinc-200 overflow-auto"
						>
							{/* User Profile Section */}
							<div className="flex flex-col items-start space-y-4">
								<img
									src={
										user?.photoURL ||
										"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
									}
									alt={user?.displayName || "User Avatar"}
									className="w-24 h-24 rounded-full object-cover border-2 border-zinc-600"
								/>
								<div className="text-left">
									<h2 className="text-2xl font-bold text-white">
										{user?.displayName || "John Doe"}
									</h2>
									<p className="text-zinc-400">
										{user?.email || "john.doe@example.com"}
									</p>
								</div>
							</div>

							{/* Delivery Address Accordion */}
							<details className="group border border-zinc-800 rounded-xl overflow-hidden">
								<summary className="flex items-center justify-between p-4 cursor-pointer bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-200">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-xl flex items-center justify-center">
											<svg
												className="w-4 h-4 text-zinc-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-zinc-200">
												Delivery Address
											</h3>
											<p className="text-sm text-zinc-400">
												Manage your shipping information
											</p>
										</div>
									</div>
									<svg
										className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<div className="p-4 border-t border-zinc-800 space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												Full Name
											</label>
											<input
												type="text"
												placeholder="John Doe"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												Phone Number
											</label>
											<input
												type="tel"
												placeholder="+1 (555) 123-4567"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Street Address
										</label>
										<input
											type="text"
											placeholder="123 Main Street, Apt 4B"
											className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
										/>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												City
											</label>
											<input
												type="text"
												placeholder="New York"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												State
											</label>
											<input
												type="text"
												placeholder="NY"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												ZIP Code
											</label>
											<input
												type="text"
												placeholder="10001"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Country
										</label>
										<select className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50">
											<option value="">Select Country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
											<option value="UK">United Kingdom</option>
											<option value="AU">Australia</option>
										</select>
									</div>

									{/* Save Button */}
									<button
										onClick={() => setShowAccountModal(false)}
										className="w-full bg-white text-black hover:shadow-xl hover:shadow-zinc-700 hover:font-semibold transition-all duration-100 ease-in rounded-xl p-3 text-lg font-semibold"
									>
										Save Address
									</button>
								</div>
							</details>

							{/* Previous Orders Accordion */}
							<details className="group border border-zinc-800 rounded-xl overflow-hidden">
								<summary className="flex items-center justify-between p-4 cursor-pointer bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-200">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-xl flex items-center justify-center">
											<svg
												className="w-4 h-4 text-zinc-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-zinc-200">
												Previous Orders ({previousOrders.length})
											</h3>
											<p className="text-sm text-zinc-400">
												View your order history
											</p>
										</div>
									</div>
									<svg
										className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<div className="p-4 border-t border-zinc-800">
									<div className="space-y-4">
										{previousOrders.map((order) => (
											<div
												key={order.id}
												className="border border-zinc-800 rounded-xl p-4 space-y-4"
											>
												{/* Order Header */}
												<div className="flex items-center justify-between">
													<div>
														<h4 className="font-semibold text-zinc-200">
															Order {order.orderNumber}
														</h4>
														<p className="text-sm text-zinc-400">
															{order.date}
														</p>
													</div>
													<div className="text-right">
														<p className="text-lg font-bold text-white">
															{order.total}
														</p>
														<span
															className={`text-xs px-2 py-1 rounded-full ${
																order.status === "Delivered"
																	? "bg-green-500/20 text-green-400"
																	: order.status === "Shipped"
																		? "bg-blue-500/20 text-blue-400"
																		: "bg-yellow-500/20 text-yellow-400"
															}`}
														>
															{order.status}
														</span>
													</div>
												</div>

												{/* Order Items */}
												<div className="space-y-3">
													{order.items.map((item) => (
														<div
															key={item.id}
															className="flex items-center gap-4 p-3 border border-zinc-800 rounded-xl"
														>
															{/* Image */}
															<div className="flex-shrink-0">
																<img
																	src={item.src}
																	alt={item.alt}
																	className="w-16 h-16 object-cover rounded-xl"
																/>
															</div>

															{/* Content */}
															<div className="flex-1 space-y-1">
																<h5 className="font-semibold text-zinc-200">
																	{item.name}
																</h5>
																<p className="text-sm text-zinc-400">
																	{item.description}
																</p>
																<p className="text-lg font-bold text-white">
																	{item.price}
																</p>
															</div>

															{/* Download Invoice Button */}
															<button
																onClick={() => {
																	// Download invoice functionality
																	console.log(
																		`Downloading invoice for ${order.orderNumber}`
																	);
																}}
																className="flex-shrink-0 p-2 border border-zinc-600 hover:border-blue-400 hover:bg-blue-400/10 text-zinc-400 hover:text-blue-400 rounded-xl transition-all duration-200"
															>
																<Download className="w-4 h-4" />
															</button>
														</div>
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							</details>

							{/* Logout Button */}
							<button
								onClick={() => {
									setIsAuthenticated(false);
									setUser(null);
									setShowAccountModal(false);
								}}
								className="w-fit bg-red-600 text-white hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/50 transition-all duration-100 ease-in rounded-xl p-3 text-lg font-semibold"
							>
								Logout
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Blogs Modal */}
			<AnimatePresence>
				{blogsModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						<div className="relative mx-auto mb-10">
							<button
								onClick={() => setShowBlogsModal(false)}
								className="w-8 h-8 mx-auto border border-zinc-900 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* Blogs Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", duration: 0.3 }}
							className="relative w-full max-w-4xl bg-black/90 rounded-xl border border-zinc-900 shadow-xl p-6 space-y-6 text-zinc-200 overflow-auto max-h-[80vh]"
						>
							<div className="flex items-center justify-between w-full">
								<div className="space-y-1">
									<h2 className="text-2xl font-bold text-white">
										Fashion Blog
									</h2>
									<p className="text-sm text-zinc-400">
										Latest insights and trends in fashion
									</p>
								</div>
							</div>

							{/* Blogs Grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{blogs.map((blog) => (
									<motion.div
										key={blog.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: blog.id * 0.1 }}
										onClick={() => setSelectedBlog(blog)}
										className="cursor-pointer group"
									>
										<div className="border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300">
											{/* Blog Image */}
											<div className="relative overflow-hidden">
												<img
													src={blog.image}
													alt={blog.title}
													className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
												/>
												<div className="absolute top-4 left-4">
													<span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
														{blog.category}
													</span>
												</div>
											</div>

											{/* Blog Content */}
											<div className="p-4 space-y-3">
												<h3 className="font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 line-clamp-2">
													{blog.title}
												</h3>
												<p className="text-sm text-zinc-400 line-clamp-3">
													{blog.description}
												</p>
												<div className="flex items-center justify-between text-xs text-zinc-500">
													<span>{blog.author}</span>
													<span>{blog.date}</span>
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Individual Blog Modal */}
			<AnimatePresence>
				{selectedBlog && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						<div className="relative mx-auto mb-10">
							<button
								onClick={() => setSelectedBlog(null)}
								className="w-8 h-8 mx-auto border border-zinc-900 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* Blog Content Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", duration: 0.3 }}
							className="relative w-full max-w-4xl bg-black/90 rounded-xl border border-zinc-900 shadow-xl text-zinc-200 max-h-[80vh] overflow-auto"
						>
							{/* Blog Header Image */}
							<div className="relative">
								<img
									src={selectedBlog.image}
									alt={selectedBlog.title}
									className="w-full h-64 object-cover"
								/>
								<div className="absolute inset-0 bg-black/40" />
								<div className="absolute bottom-6 left-6 right-6">
									<span className="bg-black/70 text-white text-sm px-3 py-1 rounded-full mb-2 inline-block">
										{selectedBlog.category}
									</span>
									<h1 className="text-3xl font-bold text-white mb-2">
										{selectedBlog.title}
									</h1>
									<div className="flex items-center gap-4 text-sm text-zinc-300">
										<span>By {selectedBlog.author}</span>
										<span>•</span>
										<span>{selectedBlog.date}</span>
									</div>
								</div>
							</div>

							{/* Blog Content */}
							<div className="p-8 space-y-6">
								<div className="prose prose-invert max-w-none">
									{selectedBlog.content.split("\n").map((paragraph, index) => (
										<p
											key={index}
											className="text-zinc-300 leading-relaxed mb-4"
										>
											{paragraph}
										</p>
									))}
								</div>

								{/* Blog Footer */}
								<div className="border-t border-zinc-800 pt-6">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
												<span className="text-zinc-300 font-semibold">
													{selectedBlog.author
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</span>
											</div>
											<div>
												<p className="font-semibold text-zinc-200">
													{selectedBlog.author}
												</p>
												<p className="text-sm text-zinc-400">Fashion Writer</p>
											</div>
										</div>
										<button
											onClick={() => setSelectedBlog(null)}
											className="bg-white text-black hover:shadow-xl hover:shadow-zinc-700 hover:font-semibold transition-all duration-100 ease-in rounded-xl px-6 py-2 font-semibold"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Authentication Modal */}
			<AnimatePresence>
				{authModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						<div className="relative mx-auto mb-10">
							<button
								onClick={() => setShowAuthModal(false)}
								className="w-8 h-8 mx-auto border border-zinc-900 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* Auth Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", duration: 0.3 }}
							className="relative w-full max-w-md bg-black/90 rounded-xl border border-zinc-900 shadow-xl p-6 space-y-6 text-zinc-200"
						>
							<div className="flex items-center justify-between w-full">
								<div className="space-y-1">
									<h2 className="text-2xl font-bold text-white">
										{isLoginMode ? "Welcome Back" : "Create Account"}
									</h2>
									<p className="text-sm text-zinc-400">
										{isLoginMode
											? "Sign in to your account to continue"
											: "Join us to start shopping"}
									</p>
								</div>
							</div>

							{/* Google Login Button */}
							<button
								onClick={() => {
									// Simulate Google login
									const mockUser = {
										displayName: "John Doe",
										email: "john.doe@gmail.com",
										photoURL:
											"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
									};
									setUser(mockUser);
									setIsAuthenticated(true);
									setShowAuthModal(false);
								}}
								className="w-full bg-white text-black hover:bg-gray-100 hover:shadow-xl hover:shadow-zinc-700 transition-all duration-100 ease-in rounded-xl p-3 text-lg font-semibold flex items-center justify-center gap-3"
							>
								<svg className="w-5 h-5" viewBox="0 0 24 24">
									<path
										fill="#4285F4"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									/>
									<path
										fill="#34A853"
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									/>
									<path
										fill="#FBBC05"
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									/>
									<path
										fill="#EA4335"
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									/>
								</svg>
								Continue with Google
							</button>

							{/* Divider */}
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-zinc-700" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-black/90 text-zinc-400">
										Or continue with email
									</span>
								</div>
							</div>

							{/* Email/Password Form */}
							<div className="space-y-4">
								{!isLoginMode && (
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Full Name
										</label>
										<input
											type="text"
											placeholder="John Doe"
											className="w-full border border-zinc-800 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-transparent"
										/>
									</div>
								)}
								<div>
									<label className="block text-sm font-medium text-zinc-300 mb-2">
										Email Address
									</label>
									<input
										type="email"
										placeholder="john@example.com"
										className="w-full border border-zinc-800 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-transparent"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-zinc-300 mb-2">
										Password
									</label>
									<input
										type="password"
										placeholder="Enter your password"
										className="w-full border border-zinc-800 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-transparent"
									/>
								</div>
								{!isLoginMode && (
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Confirm Password
										</label>
										<input
											type="password"
											placeholder="Confirm your password"
											className="w-full border border-zinc-800 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-200 bg-transparent"
										/>
									</div>
								)}
							</div>

							{/* Submit Button */}
							<button
								onClick={() => {
									// Simulate email/password login
									const mockUser = {
										displayName: "John Doe",
										email: "john@example.com",
										photoURL:
											"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
									};
									setUser(mockUser);
									setIsAuthenticated(true);
									setShowAuthModal(false);
								}}
								className="w-full bg-white text-black hover:shadow-xl hover:shadow-zinc-700 hover:font-semibold transition-all duration-100 ease-in rounded-xl p-3 text-lg font-semibold"
							>
								{isLoginMode ? "Sign In" : "Create Account"}
							</button>

							{/* Toggle Mode */}
							<div className="text-center">
								<p className="text-sm text-zinc-400">
									{isLoginMode
										? "Don't have an account? "
										: "Already have an account? "}
									<button
										onClick={() => setIsLoginMode(!isLoginMode)}
										className="text-white hover:text-zinc-200 font-semibold underline"
									>
										{isLoginMode ? "Sign up" : "Sign in"}
									</button>
								</p>
							</div>

							{/* Forgot Password */}
							{isLoginMode && (
								<div className="text-center">
									<button className="text-sm text-zinc-400 hover:text-zinc-200 underline">
										Forgot your password?
									</button>
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Help Modal */}
			<AnimatePresence>
				{helpModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						<div className="relative mx-auto mb-10">
							<button
								onClick={() => setShowHelpModal(false)}
								className="w-8 h-8 mx-auto border border-zinc-900 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* Help Modal */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 10 }}
							transition={{ type: "spring", duration: 0.3 }}
							className="relative w-full max-w-2xl bg-black/90 rounded-xl border border-zinc-900 shadow-xl p-6 space-y-6 text-zinc-200 overflow-auto max-h-[80vh]"
						>
							<div className="flex items-center justify-between w-full">
								<div className="space-y-1">
									<h2 className="text-2xl font-bold text-white">
										Help & Support
									</h2>
									<p className="text-sm text-zinc-400">
										Find answers to common questions or get in touch with us
									</p>
								</div>
							</div>

							{/* FAQ Accordion */}
							<details className="group border border-zinc-800 rounded-xl overflow-hidden">
								<summary className="flex items-center justify-between p-4 cursor-pointer bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-200">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-xl flex items-center justify-center">
											<svg
												className="w-4 h-4 text-zinc-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-zinc-200">
												Frequently Asked Questions
											</h3>
											<p className="text-sm text-zinc-400">
												Common questions and answers
											</p>
										</div>
									</div>
									<svg
										className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<div className="p-4 border-t border-zinc-800 space-y-4">
									<div className="space-y-4">
										<div className="border border-zinc-800 rounded-xl p-4">
											<h4 className="font-semibold text-zinc-200 mb-2">
												How do I place an order?
											</h4>
											<p className="text-sm text-zinc-400">
												Simply browse our products, add items to your cart, and
												proceed to checkout. You can pay using various methods
												including credit cards, PayPal, and digital wallets.
											</p>
										</div>
										<div className="border border-zinc-800 rounded-xl p-4">
											<h4 className="font-semibold text-zinc-200 mb-2">
												What is your return policy?
											</h4>
											<p className="text-sm text-zinc-400">
												We offer a 30-day return policy for unworn items in
												original condition. Returns are free and can be
												initiated through your account or by contacting support.
											</p>
										</div>
										<div className="border border-zinc-800 rounded-xl p-4">
											<h4 className="font-semibold text-zinc-200 mb-2">
												How long does shipping take?
											</h4>
											<p className="text-sm text-zinc-400">
												Standard shipping takes 3-5 business days. Express
												shipping is available for 1-2 business day delivery.
												International shipping times vary by location.
											</p>
										</div>
										<div className="border border-zinc-800 rounded-xl p-4">
											<h4 className="font-semibold text-zinc-200 mb-2">
												Do you offer size exchanges?
											</h4>
											<p className="text-sm text-zinc-400">
												Yes, we offer free size exchanges within 30 days of
												purchase. Simply contact our support team or use the
												exchange option in your order history.
											</p>
										</div>
										<div className="border border-zinc-800 rounded-xl p-4">
											<h4 className="font-semibold text-zinc-200 mb-2">
												How can I track my order?
											</h4>
											<p className="text-sm text-zinc-400">
												Once your order ships, you'll receive a tracking number
												via email. You can also track your order in your account
												under "Order History".
											</p>
										</div>
									</div>
								</div>
							</details>

							{/* Contact Form Accordion */}
							<details className="group border border-zinc-800 rounded-xl overflow-hidden">
								<summary className="flex items-center justify-between p-4 cursor-pointer bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-200">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-xl flex items-center justify-center">
											<svg
												className="w-4 h-4 text-zinc-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-zinc-200">
												Contact Us
											</h3>
											<p className="text-sm text-zinc-400">
												Get in touch with our support team
											</p>
										</div>
									</div>
									<svg
										className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<div className="p-4 border-t border-zinc-800 space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												Full Name
											</label>
											<input
												type="text"
												placeholder="John Doe"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-zinc-300 mb-2">
												Email Address
											</label>
											<input
												type="email"
												placeholder="john@example.com"
												className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Subject
										</label>
										<select className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50">
											<option value="">Select a topic</option>
											<option value="order">Order Inquiry</option>
											<option value="return">Return/Exchange</option>
											<option value="shipping">Shipping Question</option>
											<option value="product">Product Question</option>
											<option value="account">Account Issue</option>
											<option value="other">Other</option>
										</select>
									</div>
									<div>
										<label className="block text-sm font-medium text-zinc-300 mb-2">
											Message
										</label>
										<textarea
											rows={4}
											placeholder="Please describe your question or issue in detail..."
											className="w-full border border-zinc-700 rounded-xl p-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-900/50 resize-none"
										/>
									</div>
									<button
										onClick={() => setShowHelpModal(false)}
										className="w-full bg-white text-black hover:shadow-xl hover:shadow-zinc-700 hover:font-semibold transition-all duration-100 ease-in rounded-xl p-3 text-lg font-semibold"
									>
										Send Message
									</button>
								</div>
							</details>

							{/* Support Information Accordion */}
							<details className="group border border-zinc-800 rounded-xl overflow-hidden">
								<summary className="flex items-center justify-between p-4 cursor-pointer bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors duration-200">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-xl flex items-center justify-center">
											<svg
												className="w-4 h-4 text-zinc-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold text-zinc-200">
												Support Information
											</h3>
											<p className="text-sm text-zinc-400">
												Additional ways to reach us
											</p>
										</div>
									</div>
									<svg
										className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<div className="p-4 border-t border-zinc-800 space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="border border-zinc-800 rounded-xl p-4">
											<h4 className="font-semibold text-zinc-200 mb-2">
												Customer Service
											</h4>
											<p className="text-sm text-zinc-400 mb-2">
												Monday - Friday: 9 AM - 6 PM EST
											</p>
											<p className="text-sm text-zinc-400 mb-2">
												Saturday: 10 AM - 4 PM EST
											</p>
											<p className="text-sm text-zinc-400">Sunday: Closed</p>
										</div>
										<div className="border border-zinc-800 rounded-xl p-4">
											<h4 className="font-semibold text-zinc-200 mb-2">
												Contact Methods
											</h4>
											<p className="text-sm text-zinc-400 mb-2">
												Email: support@darky.com
											</p>
											<p className="text-sm text-zinc-400 mb-2">
												Phone: +1 (555) 123-4567
											</p>
											<p className="text-sm text-zinc-400">
												Live Chat: Available 24/7
											</p>
										</div>
									</div>
									<div className="border border-zinc-800 rounded-xl p-4">
										<h4 className="font-semibold text-zinc-200 mb-2">
											Response Times
										</h4>
										<p className="text-sm text-zinc-400 mb-2">
											Email: Within 24 hours
										</p>
										<p className="text-sm text-zinc-400 mb-2">
											Live Chat: Immediate response
										</p>
										<p className="text-sm text-zinc-400">
											Phone: Available during business hours
										</p>
									</div>
								</div>
							</details>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DarkyClothersShop;
