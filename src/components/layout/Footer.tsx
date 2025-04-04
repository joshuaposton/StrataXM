import Link from "next/link";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='border-t border-border/40 bg-background'>
      <div className='container px-4 md:px-6 lg:px-8 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12'>
          <div className='md:col-span-1'>
            <Link href='/' className='inline-block'>
              <svg width='140' height='40' viewBox='0 0 140 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M13.7 30C11.9 30 10.3667 29.6333 9.1 28.9C7.83333 28.1667 6.86667 27.1333 6.2 25.8C5.53333 24.4667 5.2 22.9333 5.2 21.2V12.8H9.5V20.9C9.5 22.5 9.86667 23.7 10.6 24.5C11.3333 25.3 12.4 25.7 13.8 25.7C15.2 25.7 16.2667 25.3 17 24.5C17.7333 23.7 18.1 22.5 18.1 20.9V12.8H22.3V21.2C22.3 22.9333 21.9667 24.4667 21.3 25.8C20.6333 27.1333 19.6667 28.1667 18.4 28.9C17.1333 29.6333 15.5667 30 13.7 30Z' fill='url(#paint0_linear_0_1)'/>
                <path d='M26.0031 29.7V12.8H30.2031V16.4H30.4031C30.7031 15.1333 31.2698 14.1667 32.1031 13.5C32.9365 12.8333 33.9031 12.5 35.0031 12.5C35.3031 12.5 35.6198 12.5333 35.9531 12.6C36.2865 12.6667 36.5698 12.7333 36.8031 12.8V16.7C36.5698 16.6 36.2365 16.5167 35.8031 16.45C35.3698 16.3833 34.9698 16.35 34.6031 16.35C33.8031 16.35 33.0865 16.5333 32.4531 16.9C31.8198 17.2667 31.3198 17.7667 30.9531 18.4C30.5865 19.0333 30.4031 19.7667 30.4031 20.6V29.7H26.0031Z' fill='url(#paint1_linear_0_1)'/>
                <path d='M47.8094 30C45.9427 30 44.3094 29.6 42.9094 28.8C41.5094 28 40.4094 26.8833 39.6094 25.45C38.8094 24.0167 38.4094 22.3333 38.4094 20.4C38.4094 18.5 38.8094 16.8333 39.6094 15.4C40.4094 13.9667 41.5094 12.85 42.9094 12.05C44.3094 11.25 45.9427 10.85 47.8094 10.85C49.676 10.85 51.3094 11.25 52.7094 12.05C54.1094 12.85 55.2094 13.9667 56.0094 15.4C56.8094 16.8333 57.2094 18.5 57.2094 20.4C57.2094 22.3333 56.8094 24.0167 56.0094 25.45C55.2094 26.8833 54.1094 28 52.7094 28.8C51.3094 29.6 49.676 30 47.8094 30ZM47.8094 26.2C48.876 26.2 49.8094 25.95 50.6094 25.45C51.4094 24.95 52.026 24.25 52.4594 23.35C52.8927 22.45 53.1094 21.4 53.1094 20.2C53.1094 19 52.8927 17.95 52.4594 17.05C52.026 16.15 51.4094 15.45 50.6094 14.95C49.8094 14.45 48.876 14.2 47.8094 14.2C46.7427 14.2 45.8094 14.45 45.0094 14.95C44.2094 15.45 43.5927 16.15 43.1594 17.05C42.726 17.95 42.5094 19 42.5094 20.2C42.5094 21.4 42.726 22.45 43.1594 23.35C43.5927 24.25 44.2094 24.95 45.0094 25.45C45.8094 25.95 46.7427 26.2 47.8094 26.2Z' fill='url(#paint2_linear_0_1)'/>
                <path d='M61.4156 29.7V12.8H65.6156V16.1H65.8156C66.1823 15 66.8156 14.1333 67.7156 13.5C68.6156 12.8667 69.6823 12.55 70.9156 12.55C72.1823 12.55 73.2323 12.8667 74.0656 13.5C74.899 14.1333 75.4823 15 75.8156 16.1H76.0156C76.4156 15.0333 77.1156 14.1667 78.1156 13.5C79.1156 12.8333 80.2823 12.5 81.6156 12.5C83.349 12.5 84.7323 13.0333 85.7656 14.1C86.799 15.1667 87.3156 16.7 87.3156 18.7V29.7H82.9156V19.6C82.9156 18.4 82.6156 17.5 82.0156 16.9C81.4156 16.3 80.6156 16 79.6156 16C78.4823 16 77.599 16.35 76.9656 17.05C76.3323 17.75 76.0156 18.6667 76.0156 19.8V29.7H71.7156V19.4C71.7156 18.3333 71.4323 17.4833 70.8656 16.85C70.299 16.2167 69.5323 15.9 68.5656 15.9C67.899 15.9 67.299 16.0667 66.7656 16.4C66.2323 16.7333 65.8156 17.2 65.5156 17.8C65.2156 18.4 65.0656 19.1 65.0656 19.9V29.7H61.4156Z' fill='url(#paint3_linear_0_1)'/>
                <path d='M95.7219 29.7L88.7219 12.8H93.3219L97.6219 24.7H97.8219L102.122 12.8H106.722L99.7219 29.7H95.7219Z' fill='url(#paint4_linear_0_1)'/>
                <path d='M109.228 29.7L116.228 12.8H120.228L127.228 29.7H122.628L117.428 16.4H118.928L113.728 29.7H109.228ZM112.728 25.4L113.928 22.1H122.228L123.428 25.4H112.728Z' fill='url(#paint5_linear_0_1)'/>
                <defs>
                  <linearGradient id='paint0_linear_0_1' x1='5.2' y1='20' x2='134.8' y2='20' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#4CD964'/>
                    <stop offset='1' stopColor='#3B82F6'/>
                  </linearGradient>
                  <linearGradient id='paint1_linear_0_1' x1='5.2' y1='20' x2='134.8' y2='20' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#4CD964'/>
                    <stop offset='1' stopColor='#3B82F6'/>
                  </linearGradient>
                  <linearGradient id='paint2_linear_0_1' x1='5.2' y1='20' x2='134.8' y2='20' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#4CD964'/>
                    <stop offset='1' stopColor='#3B82F6'/>
                  </linearGradient>
                  <linearGradient id='paint3_linear_0_1' x1='5.2' y1='20' x2='134.8' y2='20' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#4CD964'/>
                    <stop offset='1' stopColor='#3B82F6'/>
                  </linearGradient>
                  <linearGradient id='paint4_linear_0_1' x1='5.2' y1='20' x2='134.8' y2='20' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#4CD964'/>
                    <stop offset='1' stopColor='#3B82F6'/>
                  </linearGradient>
                  <linearGradient id='paint5_linear_0_1' x1='5.2' y1='20' x2='134.8' y2='20' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#4CD964'/>
                    <stop offset='1' stopColor='#3B82F6'/>
                  </linearGradient>
                </defs>
              </svg>
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