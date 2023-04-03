import Header from "../partials/Header";
import SpeedDialTooltipOpen from "../partials/speeddial";

const posts = [
    {
      id: 1,
      title: 'Importance of Career Assessment',
      href: 'https://www.mindler.com/blog/career-assessment/',
      description:
        'Career uncertainty is not new. It has been an age-old problem that a series of generations have experienced and is still experiencing. The only difference between the present day and the past is that the careers have expanded and branched out, followed by the sudden awareness among different individuals about the need to have career clarity'
        ,
      date: 'Dec 21, 2021',
      datetime: '2021-12-21',
      category: { title: 'Writing', href: '#' },
      author: {
        name: 'Debjani Roy',
        role: 'Technical Writer',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },

    {
        id: 2,
        title: 'Advice I would Like to Give to My Younger Self',
        href: 'https://www.huffpost.com/entry/7-pieces-of-advice-id-like-to-give-to-my-younger-self_b_7054874',
        description:
          'Looking back to my younger years, I am sometimes amazed at how life has turned. Nothing is exactly what I had originally planned for. The only thing that stays the same is who I am, my values, and my interests.'
          ,
        date: 'Dec 6, 2017',
        datetime: '2021-12-06',
        category: { title: 'Writing', href: '#' },
        author: {
          name: 'Debjani Roy',
          role: 'Technical Writer',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    // More posts...
  ]
  
  export default function Blog() {
    return (
        <div>
            <Header />
            <SpeedDialTooltipOpen />
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {post.category.title}
                            </a>
                            </div>
                            <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                            </div>
                        </div>
                    </article>
                    ))}
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {post.category.title}
                            </a>
                            </div>
                            <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                            </div>
                        </div>
                    </article>
                    ))}
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {post.category.title}
                            </a>
                            </div>
                            <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                </a>
                                </p>
                                <p className="text-gray-600">{post.author.role}</p>
                            </div>
                        </div>
                    </article>
                    ))}
                </div>
                </div>
            </div>
        </div>
      
    )
  }
  