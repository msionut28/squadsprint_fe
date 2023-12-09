import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CustomDialog = ({
  dialogBtnTxt,
  dialogTitle,
  dialogDesc,
  children,
  dialogFooter,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{dialogBtnTxt}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDesc}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <p className="text-center text-gray-500 text-xs">{dialogFooter}</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
