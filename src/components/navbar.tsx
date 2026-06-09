import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Sobre mim', href: '#aboutMe', current: false },
    { name: 'Especializações', href: '#specialization', current: false },
    { name: 'Cirurgias', href: '#surgeries', current: false },
    { name: 'Agende sua Consulta', href: '#contact', current: true },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({ openQuestionnaire }: { openQuestionnaire: () => void }) {
    
    return (
        <Disclosure as="nav" className="bg-slate-300 text-slate-200">
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-1">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-dark hover:bg-blue-dark hover:text-[#2d6a9f] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[text-[#2d6a9f]">
                            <span className="absolute -inset-0.5" />
                            <Bars3Icon aria-hidden="true" className="text-[#2d6a9f] block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="text-[#2d6a9f] hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                            <button
                                    onClick={openQuestionnaire}
                                    className='text-black hover:bg-[#2d6a9f] hover:text-white rounded-md px-3 py-2 text-md font-medium'
                                >
                                    Teste a sua Função Erétil
                                </button>
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-[#2d6a9f] text-white' : 'text-black hover:bg-[#2d6a9f] hover:text-white',
                                            'rounded-md px-3 py-2 text-md font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                 
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                <button
                                    onClick={openQuestionnaire}
                                    className='text-black hover:bg-[#2d6a9f] hover:text-white rounded-md px-3 py-2 text-md font-medium'
                                >
                                    Teste a sua Função Erétil
                                </button>
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-[#2d6a9f] text-white' : 'text-blue-dark hover:bg-blue-dark hover:text-[#2d6a9f]',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

