function HeaderItems({ Icon, title }) {
	return (
		<div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
			<Icon className='h-9 mb-1.5 group-hover:animate-spin' />
			<p className='opacity-0 group-hover:opacity-100 tracking-widest'>
				{title}
			</p>
		</div>
	);
}

export default HeaderItems;
