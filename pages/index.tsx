import Image from 'next/image'
import { Layout, Text, Page, Code, Link, Snippet } from '@vercel/examples-ui'

import board from '../public/board.jpg'
import BlogSection from '../components/blog-section'

function Home() {
  return (
    <div className = "max-w-[1440px] mx-auto px-5">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Maintenance page usage example</Text>
        <Text>
          When we do a release, promotion, event, etc. that might bring more
          attention than usual to a page; Its a good idea to have a backup plan
          that includes showing a different page to the users in case something
          fails. If this page receives a lot of traffic, we can use the edge, a
          previously generated static page and Edge Config to give the users
          dynamic at the speed of static.
        </Text>
        <Image width={500} src={board} alt="Graph showing how to use middleware" />
        <Text>
          This will let us change the flow of the traffic quickly in case
          something fails.
        </Text>
        <div className='h-10 bg-rose-600 p-10'>Hello</div>
      </section>
      <section className="flex flex-col gap-3">
        <Text variant="h2">How to do it?</Text>
        <Text>
          You can add a <Code>middleware.js</Code> file in the root of your
          project. Inside <Code>middleware.js</Code> you can do something like
          this:
        </Text>
        <Snippet>{`import { NextRequest, NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = {
  matcher: '/big-promo',
}

export async function middleware(req: NextRequest) {
  // Check Edge Config to see if the maintenance page should be shown
  const isInMaintenanceMode = await get('isInMaintenanceMode')

  // If in maintenance mode, point the url pathname to the maintenance page
  if (isInMaintenanceMode) {
    req.nextUrl.pathname = \`/maintenance\`

    // Rewrite to the url
    return NextResponse.rewrite(req.nextUrl)
  }
}`}</Snippet>
        <Text>
          If you want to see how this maintenance page works, check the{' '}
          route.
        </Text>
      </section>
  </div>
  )
}

//Home.Layout = Layout

export default Home
