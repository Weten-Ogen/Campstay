import { log } from 'console'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Recipelist({recipedata}) {
    console.log(recipedata)
  return (
    <div className="p-4 mx-auto lg:max-w-6xl  md:max-w-full">
        <h2 className='text-4xl  font-bold text-gray-400 mb-12 '> Recipes </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                recipedata && recipedata.length > 0 ? 
                recipedata.map(recipe => <Link href="">
                    <Card>
                        <CardContent className="bg-white roundd-md oveflow-hidden hover:scale-[1.1] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <Image
                                src={recipe.image} 
                                alt={recipe.name}
                                width={100}
                                blueDataUrl={recipe.image}
                                height={100}
                                className="h-full w-full object-cover " />

                            </div>

                        </CardContent>
                    </Card>
                </Link>): <p>Updating info of this recipe</p>
            }
        </div>
    </div>
  )
}
