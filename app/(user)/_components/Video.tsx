'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlayCircleIcon } from 'lucide-react';
// import {ReactPlayer} from 'react-player'
import ReactPlayer from 'react-player';
export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="text-3xl font-semibold text-gray-800 px-16 py-8 flex gap-2 items-center justify-center my-10"
          variant="outline"
        >
          <h3>Watch Video</h3>
          <PlayCircleIcon size={40} className="text-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-screen-sm w-full  mx-auto flex flex-col justify-center items-center p-2 rounded-md  lg:pt-14">
        <ReactPlayer
          loop={true}
          playing={false}
          controls={true}
          playIcon={<Button>Play</Button>}
          width="100%"
          height="300px"
          url="/7513671-uhd_3840_2160_24fps.mp4"
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
