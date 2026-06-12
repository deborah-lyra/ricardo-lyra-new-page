


export function TopLogo() {
    return (
        <div className='bg-[#0a1628] flex items-center justify-between px-8 py-4'>
            <div>
               <img src="/logo.svg" alt="Logo" width={100} height={100}  className="rounded-xl h-20"/>
            </div>
            <div>
                <h2 className="font-bold text-4xl">Ricardo Lyra</h2>
                <div> 
                <p className='text-lg mt-1.5'>Andrologia | Urologia</p>
                </div>
            </div>
        </div>
    )
}
