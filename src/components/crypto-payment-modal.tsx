"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Wallet, 
  Copy, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Zap,
  ArrowRight
} from "lucide-react"

interface CryptoOption {
  symbol: string
  name: string
  rate: number
  icon: string
  network: string
  gasEstimate?: string
  popular?: boolean
}

interface CryptoPaymentModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: number
    title: string
    price: number
  }
  onPaymentSuccess: (transactionHash: string) => void
}

const cryptoOptions: CryptoOption[] = [
  {
    symbol: 'USDC',
    name: 'USD Coin',
    rate: 1.00,
    icon: '💵',
    network: 'Polygon Network',
    gasEstimate: '~$0.01',
    popular: true
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    rate: 0.000023,
    icon: '⟠',
    network: 'Ethereum Mainnet',
    gasEstimate: '~$12'
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    rate: 0.045,
    icon: '🔮',
    network: 'Polygon Network',
    gasEstimate: '~$0.01'
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    rate: 0.0000012,
    icon: '₿',
    network: 'Bitcoin Network',
    gasEstimate: '~$3'
  }
]

export function CryptoPaymentModal({ isOpen, onClose, product, onPaymentSuccess }: CryptoPaymentModalProps) {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption>(cryptoOptions[0])
  const [walletConnected, setWalletConnected] = useState(false)
  const [paymentStep, setPaymentStep] = useState<'select' | 'connect' | 'confirm' | 'processing' | 'success'>('select')
  const [transactionHash, setTransactionHash] = useState('')
  const [walletAddress, setWalletAddress] = useState('')

  const discountedPrice = product.price * 0.95 // 5% crypto discount
  const cryptoAmount = discountedPrice * selectedCrypto.rate

  const connectWallet = async () => {
    setPaymentStep('connect')
    setTimeout(() => {
      setWalletConnected(true)
      setWalletAddress('0x1234...5678')
      setPaymentStep('confirm')
    }, 2000)
  }

  const processPayment = async () => {
    setPaymentStep('processing')
    setTimeout(() => {
      const mockTxHash = '0x' + Math.random().toString(16).substr(2, 64)
      setTransactionHash(mockTxHash)
      setPaymentStep('success')
      onPaymentSuccess(mockTxHash)
    }, 3000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const formatCryptoAmount = (amount: number, symbol: string) => {
    if (symbol === 'USDC') return amount.toFixed(2)
    if (symbol === 'BTC' || symbol === 'ETH') return amount.toFixed(8)
    return amount.toFixed(4)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-blue-600" />
            Pay with Cryptocurrency
            <Badge className="bg-blue-100 text-blue-700 text-xs">Web3</Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Discount Badge */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-4 text-center">
              <Badge className="bg-green-600 text-white mb-2">
                <Zap className="w-3 h-3 mr-1" />
                5% Crypto Discount Applied
              </Badge>
              <div className="text-2xl font-bold text-green-700">
                ${discountedPrice.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">
                <span className="line-through">${product.price}</span> • You save ${(product.price - discountedPrice).toFixed(2)}
              </div>
            </CardContent>
          </Card>

          {paymentStep === 'select' && (
            <>
              <div>
                <Label className="text-base font-medium">Select Cryptocurrency</Label>
                <div className="grid gap-2 mt-2">
                  {cryptoOptions.map((crypto) => (
                    <Card 
                      key={crypto.symbol}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedCrypto.symbol === crypto.symbol ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedCrypto(crypto)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{crypto.icon}</span>
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {crypto.name}
                                {crypto.popular && (
                                  <Badge className="bg-orange-100 text-orange-700 text-xs">Popular</Badge>
                                )}
                              </div>
                              <div className="text-xs text-gray-500">{crypto.network}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-sm">
                              {formatCryptoAmount(cryptoAmount, crypto.symbol)} {crypto.symbol}
                            </div>
                            <div className="text-xs text-gray-500">
                              {crypto.gasEstimate}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Button onClick={connectWallet} className="w-full bg-blue-600 hover:bg-blue-700">
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet & Pay
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="text-center text-xs text-gray-500">
                Secure payments powered by blockchain technology
              </div>
            </>
          )}

          {paymentStep === 'connect' && (
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="font-medium mb-2">Connecting to Wallet...</h3>
                <p className="text-sm text-gray-600">
                  Please approve the connection request in your {selectedCrypto.network} wallet
                </p>
              </CardContent>
            </Card>
          )}

          {paymentStep === 'confirm' && (
            <>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Wallet Connected</span>
                  </div>
                  <div className="text-sm text-gray-600 font-mono">
                    {walletAddress}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Product</span>
                    <span className="font-medium text-right max-w-[200px] truncate">{product.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Original Price</span>
                    <span className="line-through text-gray-500">${product.price}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Crypto Discount (5%)</span>
                    <span>-${(product.price - discountedPrice).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span>{selectedCrypto.symbol} ({selectedCrypto.network})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Gas</span>
                    <span>{selectedCrypto.gasEstimate}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      {formatCryptoAmount(cryptoAmount, selectedCrypto.symbol)} {selectedCrypto.symbol}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={processPayment} className="w-full bg-green-600 hover:bg-green-700">
                <Zap className="w-4 h-4 mr-2" />
                Confirm Payment
              </Button>
            </>
          )}

          {paymentStep === 'processing' && (
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="font-medium mb-2">Processing Payment...</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your transaction is being processed on the {selectedCrypto.network}
                </p>
                <div className="space-y-2">
                  <Progress value={75} className="h-2" />
                  <div className="text-xs text-gray-500">
                    Transaction submitted • Awaiting blockchain confirmation
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {paymentStep === 'success' && (
            <>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Payment Successful!</h3>
                  <p className="text-green-700 mb-4">
                    Your purchase has been confirmed on the blockchain
                  </p>
                  
                  <div className="bg-white p-3 rounded-lg border">
                    <div className="text-sm font-medium mb-1">Transaction Hash</div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono truncate flex-1">{transactionHash}</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => copyToClipboard(transactionHash)}
                        className="p-1 h-auto"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-1 h-auto"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={onClose} className="w-full">
                Continue to Download
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}