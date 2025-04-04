
import Link from "next/link";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='border-t border-border/40 bg-background'>
      <div className='container px-4 md:px-6 lg:px-8 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12'>
          <div className='md:col-span-1'>
            <Link href='/' className='inline-block'>
              <Image 
                src='/images/logo.png' 
                alt='StrataXM Logo' 
                width={140} 
                height={40} 
                className='h-10 w-auto'
              />
            </Link>
            <p className='mt-4 text-sm text-muted-foreground max-w-xs'>
              Delivering innovative solutions and strategic insights to drive business transformation.
            </p>
          </div>
          
          <div>
            <h3 className='text-sm font-medium mb-4 gradient-text'>Company</h3>
            <ul className='space-y-3'>
              <li>
                <Link href='/about' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/careers' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className='text-sm font-medium mb-4 gradient-text'>Services</h3>
            <ul className='space-y-3'>
              <li>
                <Link href='/services/consulting' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  Consulting
                </Link>
              </li>
              <li>
                <Link href='/services/strategy' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  Strategy
                </Link>
              </li>
              <li>
                <Link href='/services/implementation' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  Implementation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className='text-sm font-medium mb-4 gradient-text'>Legal</h3>
            <ul className='space-y-3'>
              <li>
                <Link href='/privacy' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/terms' className='text-sm text-muted-foreground hover:text-[#4CD964] transition-colors'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className='mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} StrataXM. All rights reserved.
          </p>
          <div className='flex items-center gap-4'>
            <Link href='#' className='text-muted-foreground hover:text-[#4CD964] transition-colors'>
              <span className='sr-only'>LinkedIn</span>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-linkedin'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/><rect width='4' height='12' x='2' y='9'/><circle cx='4' cy='4' r='2'/></svg>
            </Link>
            <Link href='#' className='text-muted-foreground hover:text-[#3B82F6] transition-colors'>
              <span className='sr-only'>Twitter</span>
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-twitter'><path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
