export const LayoutNavigation = () => {
  return (
    <div className='fixed w-full flex flex-row justify-between gap-1 bg-red-300 h-10'>
      <div>Menu Button</div>
      <div>Title</div>
      <div>User Icon</div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <LayoutNavigation />
      Hello World
    </>
  )
}