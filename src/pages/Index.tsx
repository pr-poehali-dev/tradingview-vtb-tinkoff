import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('trade');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'price', message: 'BTC достиг $45,000', time: '2 мин назад' },
    { id: 2, type: 'signal', message: 'Сигнал на покупку ETH', time: '5 мин назад' },
    { id: 3, type: 'order', message: 'Ордер выполнен', time: '10 мин назад' }
  ]);

  const portfolio = [
    { symbol: 'BTC', amount: '0.5432', value: '$24,456', change: '+2.4%', color: 'text-green-600' },
    { symbol: 'ETH', amount: '12.8', value: '$31,200', change: '-1.2%', color: 'text-red-600' },
    { symbol: 'BNB', amount: '45.2', value: '$13,560', change: '+5.8%', color: 'text-green-600' },
  ];

  const watchlist = [
    { symbol: 'ADA', price: '$0.52', change: '+3.2%', color: 'text-green-600' },
    { symbol: 'DOT', price: '$6.85', change: '-0.8%', color: 'text-red-600' },
    { symbol: 'LINK', price: '$14.32', change: '+1.9%', color: 'text-green-600' },
  ];

  const tradingPairs = [
    { pair: 'BTC/USDT', price: '45,234.56', change: '+2.4%', volume: '1.2B', high: '46,120', low: '44,100' },
    { pair: 'ETH/USDT', price: '2,438.92', change: '-1.2%', volume: '856M', high: '2,520', low: '2,380' },
    { pair: 'BNB/USDT', price: '312.45', change: '+5.8%', volume: '234M', high: '318', low: '295' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">TradeX Pro</h1>
            <nav className="flex space-x-6">
              <button 
                onClick={() => setActiveTab('home')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveTab('trade')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'trade' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Торговля
              </button>
              <button 
                onClick={() => setActiveTab('charts')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'charts' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Графики
              </button>
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'portfolio' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Портфель
              </button>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'analytics' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Аналитика
              </button>
              <button 
                onClick={() => setActiveTab('news')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'news' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Новости
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Bell" size={16} className="mr-2" />
              Уведомления
              <Badge variant="destructive" className="ml-2">3</Badge>
            </Button>
            <Button size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Добро пожаловать в TradeX Pro</h2>
              <p className="text-xl mb-6">Профессиональная торговая платформа с передовыми инструментами</p>
              <div className="flex space-x-4">
                <Button variant="secondary" onClick={() => setActiveTab('trade')}>
                  Начать торговлю
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                  Демо-режим
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Общий баланс</p>
                      <p className="text-2xl font-bold">$69,216</p>
                      <p className="text-sm text-green-600">+6.4% за день</p>
                    </div>
                    <Icon name="TrendingUp" size={24} className="text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Активные позиции</p>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-blue-600">8 прибыльных</p>
                    </div>
                    <Icon name="BarChart3" size={24} className="text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Дневная прибыль</p>
                      <p className="text-2xl font-bold text-green-600">+$4,432</p>
                      <p className="text-sm text-gray-500">+6.8%</p>
                    </div>
                    <Icon name="DollarSign" size={24} className="text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Уведомления</p>
                      <p className="text-2xl font-bold">{notifications.length}</p>
                      <p className="text-sm text-orange-600">Новые сигналы</p>
                    </div>
                    <Icon name="Bell" size={24} className="text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'trade' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Trading Pairs */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BarChart3" size={20} className="mr-2" />
                    Торговые пары
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tradingPairs.map((pair, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div>
                          <h4 className="font-semibold">{pair.pair}</h4>
                          <p className="text-2xl font-bold">${pair.price}</p>
                          <p className={`text-sm ${pair.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {pair.change}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Объем: {pair.volume}</p>
                          <p className="text-sm text-gray-500">Макс: ${pair.high}</p>
                          <p className="text-sm text-gray-500">Мин: ${pair.low}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Купить
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                            Продать
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Book */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Стакан заявок
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 text-sm font-semibold text-gray-600 border-b pb-2">
                      <span>Цена</span>
                      <span>Размер</span>
                      <span>Сумма</span>
                    </div>
                    {/* Sell Orders */}
                    <div className="space-y-1">
                      <div className="grid grid-cols-3 gap-2 text-sm text-red-600">
                        <span>45,287</span>
                        <span>0.125</span>
                        <span>5,660</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm text-red-600">
                        <span>45,265</span>
                        <span>0.456</span>
                        <span>20,640</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm text-red-600">
                        <span>45,241</span>
                        <span>0.789</span>
                        <span>35,705</span>
                      </div>
                    </div>
                    <div className="border-t border-b py-2 text-center font-bold">
                      45,234.56
                    </div>
                    {/* Buy Orders */}
                    <div className="space-y-1">
                      <div className="grid grid-cols-3 gap-2 text-sm text-green-600">
                        <span>45,223</span>
                        <span>0.234</span>
                        <span>10,582</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm text-green-600">
                        <span>45,210</span>
                        <span>0.567</span>
                        <span>25,644</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm text-green-600">
                        <span>45,198</span>
                        <span>1.234</span>
                        <span>55,774</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'charts' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="LineChart" size={20} className="mr-2" />
                  Торговые графики BTC/USDT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/img/911083c6-addc-400e-b3dd-a739e5e8b55c.jpg" 
                    alt="Trading Chart Visualization" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Technical Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Target" size={20} className="mr-2" />
                    Технические индикаторы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>RSI (14)</span>
                      <Badge variant={65 > 70 ? 'destructive' : 65 < 30 ? 'default' : 'secondary'}>65.3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>MACD</span>
                      <Badge variant="default">Бычий</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>MA (50)</span>
                      <Badge variant="secondary">44,876</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bollinger Bands</span>
                      <Badge variant="outline">Сужение</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Zap" size={20} className="mr-2" />
                    Торговые сигналы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-green-800">Покупка BTC</span>
                        <Badge className="bg-green-600">Сильный</Badge>
                      </div>
                      <p className="text-sm text-green-600">Пробой сопротивления</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-blue-800">Покупка ETH</span>
                        <Badge variant="secondary">Средний</Badge>
                      </div>
                      <p className="text-sm text-blue-600">Отскок от поддержки</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-orange-800">Продажа DOGE</span>
                        <Badge variant="outline">Слабый</Badge>
                      </div>
                      <p className="text-sm text-orange-600">Дивергенция RSI</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="PieChart" size={20} className="mr-2" />
                    Распределение портфеля
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="PieChart" size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600">Круговая диаграмма портфеля</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Wallet" size={20} className="mr-2" />
                    Общая статистика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Общая стоимость</p>
                      <p className="text-2xl font-bold">$69,216</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Дневное изменение</p>
                      <p className="text-lg font-semibold text-green-600">+$4,432 (+6.8%)</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Прибыль/убыток</p>
                      <p className="text-lg font-semibold text-green-600">+$12,456 (+21.9%)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Holdings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Coins" size={20} className="mr-2" />
                  Активы портфеля
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolio.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-blue-600">{asset.symbol.slice(0, 2)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{asset.symbol}</h4>
                          <p className="text-sm text-gray-600">{asset.amount} {asset.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{asset.value}</p>
                        <p className={`text-sm ${asset.color}`}>{asset.change}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Торговать
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Search" size={20} className="mr-2" />
                    Скринер криптовалют
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <Input placeholder="Поиск по символу..." className="flex-1" />
                      <Button size="sm">
                        <Icon name="Filter" size={16} />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-4 gap-2 text-sm font-semibold text-gray-600 border-b pb-2">
                        <span>Символ</span>
                        <span>Цена</span>
                        <span>Изменение</span>
                        <span>Объем</span>
                      </div>
                      {watchlist.map((item, index) => (
                        <div key={index} className="grid grid-cols-4 gap-2 text-sm py-2 hover:bg-gray-50 rounded">
                          <span className="font-medium">{item.symbol}</span>
                          <span>{item.price}</span>
                          <span className={item.color}>{item.change}</span>
                          <span className="text-gray-600">124M</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Eye" size={20} className="mr-2" />
                    Список наблюдения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {watchlist.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">{item.symbol}</h4>
                          <p className="text-lg font-bold">{item.price}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${item.color}`}>{item.change}</p>
                          <Button size="sm" variant="ghost">
                            <Icon name="MoreHorizontal" size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить в список
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Backtest & Copy Trading */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Rewind" size={20} className="mr-2" />
                    Бэктестинг стратегий
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800">MA Crossover</h4>
                      <p className="text-sm text-blue-600">Прибыль: +34.5% за год</p>
                      <p className="text-sm text-blue-600">Макс. просадка: -8.2%</p>
                      <Progress value={75} className="mt-2" />
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800">RSI Mean Reversion</h4>
                      <p className="text-sm text-green-600">Прибыль: +28.1% за год</p>
                      <p className="text-sm text-green-600">Макс. просадка: -5.4%</p>
                      <Progress value={85} className="mt-2" />
                    </div>
                    <Button className="w-full">
                      Создать стратегию
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Copy" size={20} className="mr-2" />
                    Копитрейдинг
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">CryptoExpert_2024</h4>
                        <Badge className="bg-green-600">+45.2%</Badge>
                      </div>
                      <p className="text-sm text-gray-600">156 подписчиков</p>
                      <p className="text-sm text-gray-600">Win Rate: 78%</p>
                      <Button size="sm" className="mt-2 w-full">
                        Копировать
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">TechAnalyst_Pro</h4>
                        <Badge className="bg-blue-600">+32.8%</Badge>
                      </div>
                      <p className="text-sm text-gray-600">89 подписчиков</p>
                      <p className="text-sm text-gray-600">Win Rate: 85%</p>
                      <Button size="sm" variant="outline" className="mt-2 w-full">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Newspaper" size={20} className="mr-2" />
                  Криптовалютные новости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Bitcoin достиг нового максимума в $45,000</h4>
                      <span className="text-sm text-gray-500">2 часа назад</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Цена Bitcoin продолжает рост на фоне институционального интереса...</p>
                    <div className="flex space-x-2">
                      <Badge variant="outline">BTC</Badge>
                      <Badge variant="outline">Рост</Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Ethereum готовится к крупному обновлению</h4>
                      <span className="text-sm text-gray-500">4 часа назад</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Новое обновление сети может значительно снизить комиссии...</p>
                    <div className="flex space-x-2">
                      <Badge variant="outline">ETH</Badge>
                      <Badge variant="outline">Технологии</Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Новые регуляции в США</h4>
                      <span className="text-sm text-gray-500">6 часов назад</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">SEC анонсировала новые правила для криптобирж...</p>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Регулирование</Badge>
                      <Badge variant="outline">США</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Notifications Panel */}
      {notifications.length > 0 && (
        <div className="fixed bottom-4 right-4 w-80 space-y-2">
          {notifications.slice(0, 3).map((notification) => (
            <div key={notification.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg animate-slide-in-right">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={notification.type === 'price' ? 'TrendingUp' : notification.type === 'signal' ? 'Zap' : 'CheckCircle'} 
                    size={16} 
                    className="text-blue-600" 
                  />
                  <span className="text-sm font-medium">{notification.message}</span>
                </div>
                <button 
                  onClick={() => setNotifications(notifications.filter(n => n.id !== notification.id))}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="X" size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;