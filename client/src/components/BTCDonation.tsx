/*
Component: BTCDonation
BTC donation widget with QR code and copy address
Bitcoin orange themed, elegant dialog
*/

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bitcoin, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const BTC_ADDRESS = "12eS2k1frjtBYbCyLQR7GUmSrayko3S4L2";

export default function BTCDonation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BTC_ADDRESS);
    setCopied(true);
    toast.success("BTC 地址已复制");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
        >
          <Bitcoin className="w-4 h-4" />
          打赏支持
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary">
            <Bitcoin className="w-5 h-5" />
            BTC 打赏
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-5 py-4">
          {/* QR Code */}
          <div className="p-3 bg-white rounded-xl border border-border shadow-sm">
            <QRCodeSVG
              value={`bitcoin:${BTC_ADDRESS}`}
              size={180}
              level="M"
              includeMargin={false}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          </div>

          <p className="text-xs text-muted-foreground text-center">
            扫描二维码或复制地址打赏 BTC
          </p>

          {/* Address + Copy */}
          <div className="w-full flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
            <span className="text-xs font-mono text-foreground flex-1 break-all leading-relaxed">
              {BTC_ADDRESS}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0 hover:text-primary hover:bg-primary/10"
              onClick={handleCopy}
              aria-label="复制地址"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            感谢你的支持 ❤️
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
