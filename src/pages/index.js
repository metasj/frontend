import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import HyperscaleMark from '@/components/HyperscaleMark'
import JoinDiscordIcon from '@/components/icons/JoinDiscordIcon'
import Meta from '@/components/Meta'
import TimelineItem from '@/components/TimelineItem'
import Link from 'next/link'
import {
	MenuIcon,
	XIcon,
	MapIcon,
	LightningBoltIcon,
	UserGroupIcon,
	CashIcon,
	InboxInIcon,
	DocumentSearchIcon,
} from '@heroicons/react/outline'

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'Vetting', href: '#' },
	{ name: 'Process', href: '#' },
	{ name: 'Mission', href: '#' },
]

const features = [
	{
		name: 'High speed funding',
		icon: LightningBoltIcon,
		desc: 'Just fill out an applicaiton and get funded in a few hours.',
	},
	{
		name: 'Strong community',
		icon: UserGroupIcon,
		desc: 'All HyperscaleDAO investments will be plugged into the community of devs, experts, & fellow founders. We work as one furthering each other.',
	},
	{
		name: 'Guidance',
		icon: MapIcon,
		desc: 'We have the best devs, marketers, advisors, & investors in crypto. We’re all here to move your DAO forward.',
	},
]

const faqs = [
	{
		question: 'How can I apply to Hyperscale?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit, enim eu vulputate interdum, libero nunc commodo augue, at laoreet quam diam at libero. Aliquam erat volutpat. Vestibulum aliquet nunc ut neque ullamcorper, quis mollis turpis tincidunt. Pellentesque mollis leo quis semper iaculis. Proin eu ex maximus eros dapibus hendrerit. Ut vel mollis arcu. Donec semper enim vitae diam volutpat hendrerit. Aliquam dignissim nibh arcu. Ut vestibulum, ligula in vulputate consequat, tortor odio dignissim velit, at pulvinar felis libero in sapien.',
	},
	{
		question: 'How do I participate on the community?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit, enim eu vulputate interdum, libero nunc commodo augue, at laoreet quam diam at libero. Aliquam erat volutpat. Vestibulum aliquet nunc ut neque ullamcorper, quis mollis turpis tincidunt. Pellentesque mollis leo quis semper iaculis. Proin eu ex maximus eros dapibus hendrerit. Ut vel mollis arcu. Donec semper enim vitae diam volutpat hendrerit. Aliquam dignissim nibh arcu. Ut vestibulum, ligula in vulputate consequat, tortor odio dignissim velit, at pulvinar felis libero in sapien.',
	},
	{
		question: 'How do I refer someone?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit, enim eu vulputate interdum, libero nunc commodo augue, at laoreet quam diam at libero. Aliquam erat volutpat. Vestibulum aliquet nunc ut neque ullamcorper, quis mollis turpis tincidunt. Pellentesque mollis leo quis semper iaculis. Proin eu ex maximus eros dapibus hendrerit. Ut vel mollis arcu. Donec semper enim vitae diam volutpat hendrerit. Aliquam dignissim nibh arcu. Ut vestibulum, ligula in vulputate consequat, tortor odio dignissim velit, at pulvinar felis libero in sapien.',
	},
]

const timeline = [
	{ title: 'Apply', desc: 'Takes 5 min.', icon: InboxInIcon },
	{ title: 'Funding', desc: 'HyperscaleDAO exchanges liquid Hyperscale token for the DAO’s token.', icon: CashIcon },
	{
		title: 'Shareholder review',
		desc: 'Members vote on new projects with their Hyperscale token.',
		icon: DocumentSearchIcon,
	},
	{
		title: 'Community support',
		desc: 'When an investment is made the community has an incentive to help the DAO. The DAO just submits bounties and pays out their token. Catalyzers also receive Hyperscale tokens for helping.',
		icon: UserGroupIcon,
	},
]

const footer = [
	{
		name: 'About',
		items: [
			{ name: 'Twitter', url: '#' },
			{ name: 'Manifesto', url: '#' },
			{ name: 'The Team', url: '#' },
		],
	},
	{
		name: 'Help',
		items: [
			{ name: 'Support', url: '#' },
			{ name: 'Contact Us', url: '#' },
			{ name: 'Helpline', url: '#' },
		],
	},
]

const Landing = () => (
	<div>
		<Meta />
		<div
			className="relative bg-white overflow-hidden"
			style={{
				background:
					"url('/bg-patterns.svg') left top no-repeat, linear-gradient(244.75deg, #D1D5FC -10.92%, #F3F3FA 30.96%, #FFFFFF 110.9%) center center",
			}}
		>
			<div className="pointer-events-none">
				<div
					className="absolute top-[-667px] left-[626px] w-[1185px] h-[1186px] opacity-20"
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #4FFEFE 0%, rgba(93, 186, 239, 0) 100%)',
					}}
				/>
				<div
					className="absolute top-[-463px] left-[-682px] w-[931px] h-[931px] opacity-20"
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #ED008E 0%, rgba(239, 93, 146, 0) 100%)',
					}}
				/>
				<div
					className="absolute top-[-779px] left-[-82px] w-[1287px] h-[1287px] opacity-30"
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #5D5FEF 0%, rgba(93, 95, 239, 0) 100%)',
					}}
				/>
			</div>
			<div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
				<Popover>
					<nav
						className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
						aria-label="Global"
					>
						<div className="flex items-center flex-1">
							<div className="flex items-center justify-between w-full md:w-auto">
								<a className="flex items-center space-x-4" href="#">
									<HyperscaleMark className="h-12 w-auto sm:h-12" />
									<span className="text-indigo-500 text-4xl text-sans-og font-bold">Hyperscale</span>
								</a>
								<div className="-mr-2 flex items-center md:hidden">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Open main menu</span>
										<MenuIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="hidden md:block md:mr-10 md:space-x-10 md:ml-auto">
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
						<div className="hidden md:block text-right">
							<button
								type="button"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
							>
								Apply
							</button>
						</div>
					</nav>
					<Transition
						as={Fragment}
						enter="duration-150 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div className="px-5 pt-4 flex items-center justify-between">
									<div>
										<HyperscaleMark className="h-8 w-auto" />
									</div>
									<div className="-mr-2">
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Close main menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="px-2 pt-2 pb-3 space-y-1">
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
								<a
									href="#"
									className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
								>
									Apply
								</a>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
							<h1>
								<span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
									<span className="block text-yellow-400">Fast funding</span>
									<span className="block text-gray-900">for early blockchain projects</span>
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								<span>Recieve $200k for 5% by filling out a simple application.</span>{' '}
								<span>You’ll recieve a decision within 1 week.</span>
							</p>
							<div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
								<button
									type="button"
									className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Apply
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div className="relative bg-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 className="text-base font-semibold tracking-wider text-yellow-500 uppercase">Zero to funded</h2>
				<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
					Get your idea off the ground in hours, not months
				</p>
				<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
					Fast feedback and funding decisions so you can focus on execution.
				</p>
				<div className="mt-12">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
						{features.map(feature => (
							<div key={feature.name} className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 group">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-yellow-400 rounded-md transform shadow-brand group-hover:shadow-brand-hover group-hover:translate-x-1 group-hover:translate-y-1 transition">
												<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											{feature.name}
										</h3>
										<p className="mt-5 text-base text-gray-500">{feature.desc}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
		<div className="relative pb-16">
			<div className="relative px-4 sm:px-6 lg:px-8 max-w-prose mx-auto rounded-lg border border-yellow-300 py-4 -my-4 shadow-brand">
				<div className="text-lg max-w-prose mx-auto">
					<h1>
						<span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							The Hyperscale DAO
						</span>
					</h1>
					<p className="mt-8 text-xl text-gray-500 leading-8">
						The HyperscaleDAO itself demonstrates the power of DAOs. In a few hours we’ve built a community
						of contributors.
					</p>
				</div>
				<div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
					<p>We’re going to network DAOs together and raise this power to the n.</p>
					<p>
						We have a community of aligned contributors who’ll earn Hyperscale &amp; other DAO tokens for
						contributing.
					</p>
					<p>
						We invest fast and track progress. We have lots of follow on capital when KPI milestones are
						hit.
					</p>
					<p>
						Your investors are contributors. You won’t have a VC firm controlling your DAO. Instead you’ll
						have a community of catalysts helping you progress.
					</p>
					<p>We also help you create and structure a DAO if you haven’t already done so.</p>
					<p>
						Today’s funding model has many components. We’re simplifing it. A globalized meritocratic
						standard for investing. Decentralzied and run by the community.
					</p>
					<p>
						When you receive investment from Hyperscale we give you Hyperscale tokens for your tokens. This
						aligns all members.
					</p>
				</div>
			</div>
		</div>
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
				<div className="lg:grid lg:grid-cols-3 lg:gap-8">
					<div>
						<h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
						<p className="mt-4 text-lg text-gray-500">
							Can’t find the answer you’re looking for? Feel free to ask on our{' '}
							<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
								Discord channel
							</a>
							.
						</p>
					</div>
					<div className="mt-12 lg:mt-0 lg:col-span-2">
						<dl className="space-y-12">
							{faqs.map(faq => (
								<div key={faq.question}>
									<dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
									<dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
		<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
			<div>
				<h2 className="text-3xl font-extrabold text-gray-900">Timeline</h2>
				<p className="mt-4 text-lg text-gray-500">
					Kick off the process in five minutes, and get a response within a week.
				</p>
			</div>
			<div className="mt-10 relative mx-4 md:mx-0">
				<div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-8 space-y-6 md:space-y-0">
					<TimelineItem item={timeline[0]} />
					<div className="hidden md:block" />
					<TimelineItem item={timeline[1]} />
				</div>
				<div className="relative my-10 hidden md:block">
					<div className="absolute inset-y-0 left-0 w-6 h-6 rounded-full bg-yellow-300 -mt-2" />
					<div className="w-full h-2 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-lg" />
					<div className="absolute inset-y-0 right-0 w-6 h-6 rounded-full bg-yellow-400 -mt-2" />
				</div>
				<div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-8 space-y-6 md:space-y-0">
					<div className="hidden md:block" />
					<TimelineItem item={timeline[2]} />
					<div className="hidden md:block" />
					<TimelineItem item={timeline[3]} />
				</div>
			</div>
		</div>
		<footer className="bg-gray-800" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="flex items-center justify-between pb-8">
					<div className="grid grid-cols-2 gap-8 w-full">
						{footer.map(section => (
							<div key={section.name}>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									{section.name}
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{section.items.map(item => (
										<li key={item.name}>
											<a href={item.url} className="text-base text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div>
						<div>
							<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Apply to Hyperscale
							</h3>
							<p className="mt-2 text-base text-gray-300">
								The quickest way to quickstart your idea. It takes 5 minutes to submit an application!
							</p>
						</div>
						<button
							type="button"
							className="mt-4 w-full bg-yellow-400 bg-opacity-60 hover:bg-opacity-70 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
						>
							Start application
						</button>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
					<p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
						&copy; {new Date().getFullYear()} Hyperscale
					</p>
				</div>
			</div>
		</footer>
	</div>
)

export default Landing
