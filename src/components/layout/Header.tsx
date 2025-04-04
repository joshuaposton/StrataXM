import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8'>
        <div className='flex items-center gap-2'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='h-8'>
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
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="default" size="sm" asChild className="bg-gradient-to-r from-[#4CD964] to-[#3B82F6] hover:opacity-90 transition-opacity">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-full sm:max-w-sm'>
            <div className='mt-6 mb-8'>
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
            </div>
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-[#4CD964] to-[#3B82F6] hover:opacity-90 transition-opacity" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}