import {
  BadgeDollarSign,
  BarChart3,
  Bell,
  Bot,
  Boxes,
  ChevronDown,
  CircleDollarSign,
  Globe2,
  LayoutDashboard,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  UsersRound,
  WandSparkles,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const navItems = [
  { label: '仪表盘', icon: LayoutDashboard, active: true },
  { label: '商品管理', icon: Boxes },
  { label: '订单履约', icon: Truck },
  { label: '客户分层', icon: UsersRound },
  { label: '营销活动', icon: BadgeDollarSign },
  { label: '数据洞察', icon: BarChart3 },
  { label: '渠道设置', icon: Store },
  { label: '系统设置', icon: Settings },
];

const products = [
  {
    sku: 'CB-AI-1024',
    name: 'Portable Smart Translator Earbuds',
    market: 'US / CA',
    price: '$69.90',
    stock: 1248,
    status: '在售',
    score: 96,
  },
  {
    sku: 'CB-HOME-880',
    name: 'Nordic RGB Desk Lamp with Wireless Charge',
    market: 'EU',
    price: '€42.50',
    stock: 684,
    status: '补货中',
    score: 88,
  },
  {
    sku: 'CB-FIT-531',
    name: 'Foldable Magnetic Fitness Bottle',
    market: 'UK / AU',
    price: '£24.99',
    stock: 2130,
    status: '在售',
    score: 92,
  },
  {
    sku: 'CB-PET-778',
    name: 'AI Pet Feeder with HD Camera',
    market: 'US',
    price: '$119.00',
    stock: 316,
    status: '预警',
    score: 79,
  },
];

const salesTrend = [
  { day: 'Mon', GMV: 42, orders: 310 },
  { day: 'Tue', GMV: 56, orders: 418 },
  { day: 'Wed', GMV: 49, orders: 396 },
  { day: 'Thu', GMV: 72, orders: 536 },
  { day: 'Fri', GMV: 88, orders: 688 },
  { day: 'Sat', GMV: 103, orders: 754 },
  { day: 'Sun', GMV: 116, orders: 812 },
];

const channelData = [
  { channel: 'Shopify', value: 48 },
  { channel: 'Amazon', value: 27 },
  { channel: 'TikTok', value: 16 },
  { channel: 'eBay', value: 9 },
];

const regionData = [
  { region: 'US', revenue: 128 },
  { region: 'EU', revenue: 96 },
  { region: 'UK', revenue: 74 },
  { region: 'AU', revenue: 52 },
  { region: 'CA', revenue: 48 },
];

const chartColors = ['#21f3d2', '#7c3aed', '#38bdf8', '#f97316'];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(33,243,210,0.16),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.22),transparent_30%),linear-gradient(135deg,#07111f_0%,#0b1220_52%,#111827_100%)]" />
      <div className="flex min-h-screen">
        <Sidebar />
        <section className="flex min-w-0 flex-1 flex-col">
          <Header />
          <div className="grid gap-6 px-6 pb-8 pt-6 xl:grid-cols-[1.65fr_0.9fr]">
            <div className="space-y-6">
              <Hero />
              <MetricGrid />
              <ProductTable />
            </div>
            <div className="space-y-6">
              <SalesChart />
              <ChannelChart />
              <AiPanel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-950/60 px-4 py-5 backdrop-blur-2xl lg:block">
      <div className="mb-8 flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-white/[0.04] p-3 shadow-[0_0_35px_rgba(33,243,210,0.08)]">
        <div className="grid size-11 place-items-center rounded-xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/25">
          <Globe2 className="size-6" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">CrossAI</p>
          <h1 className="font-semibold">跨境智店</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <a
            className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
              item.active
                ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20'
                : 'text-slate-400 hover:bg-white/[0.06] hover:text-white'
            }`}
            href="#"
            key={item.label}
          >
            <item.icon className="size-5" />
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-8 rounded-3xl border border-violet-300/20 bg-violet-500/10 p-4">
        <div className="mb-3 flex items-center gap-2 text-violet-100">
          <ShieldCheck className="size-5" />
          <span className="text-sm font-semibold">店铺健康度</span>
        </div>
        <div className="h-2 rounded-full bg-slate-800">
          <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-400">物流、库存与广告 ROI 均处于安全区间。</p>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#07111f]/78 px-6 py-4 backdrop-blur-2xl">
      <div>
        <p className="text-sm text-cyan-200">Shopify 风格 · AI 运营中枢</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight">跨境电商后台</h2>
      </div>
      <div className="flex items-center gap-3">
        <label className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-400 md:flex">
          <Search className="size-4" />
          <input className="w-56 bg-transparent outline-none placeholder:text-slate-500" placeholder="搜索商品、订单、客户" />
        </label>
        <button className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-300">
          <Bell className="size-5" />
        </button>
        <button className="flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100">
          CN Store
          <ChevronDown className="size-4" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/40">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-40 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
            <Sparkles className="size-4" />
            AI Listing Copilot 已开启
          </div>
          <h3 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">用 AI 批量优化商品标题，实时追踪全球渠道增长。</h3>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            集成商品、订单、库存、广告与市场表现，模拟 Shopify 后台的高效操作体验，并以深色科技视觉强化运营决策。
          </p>
        </div>
        <button className="group inline-flex w-fit items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-300/25 transition hover:-translate-y-0.5">
          <WandSparkles className="size-5 transition group-hover:rotate-12" />
          AI 生成标题
        </button>
      </div>
    </section>
  );
}

function MetricGrid() {
  const metrics = [
    { label: '今日 GMV', value: '$128.6K', delta: '+18.2%', icon: CircleDollarSign },
    { label: '待履约订单', value: '1,428', delta: '+9.8%', icon: PackageCheck },
    { label: '在线 SKU', value: '8,734', delta: '+312', icon: Boxes },
    { label: 'AI 标题提效', value: '42%', delta: '+7.4%', icon: Bot },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <article className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl" key={metric.label}>
          <div className="mb-5 flex items-center justify-between">
            <div className="grid size-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
              <metric.icon className="size-5" />
            </div>
            <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">{metric.delta}</span>
          </div>
          <p className="text-sm text-slate-400">{metric.label}</p>
          <h4 className="mt-2 text-3xl font-semibold">{metric.value}</h4>
        </article>
      ))}
    </section>
  );
}

function ProductTable() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
      <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h3 className="text-xl font-semibold">商品列表</h3>
          <p className="mt-1 text-sm text-slate-400">跨渠道库存、价格与 AI Listing 分数</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100">
          <WandSparkles className="size-4" />
          批量 AI 生成标题
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-slate-900/80 text-xs uppercase tracking-[0.18em] text-slate-400">
            <tr>
              <th className="px-4 py-4">商品 / SKU</th>
              <th className="px-4 py-4">市场</th>
              <th className="px-4 py-4">售价</th>
              <th className="px-4 py-4">库存</th>
              <th className="px-4 py-4">状态</th>
              <th className="px-4 py-4">AI 分数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {products.map((product) => (
              <tr className="bg-white/[0.015] transition hover:bg-cyan-300/[0.06]" key={product.sku}>
                <td className="px-4 py-4">
                  <p className="font-semibold text-white">{product.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{product.sku}</p>
                </td>
                <td className="px-4 py-4 text-slate-300">{product.market}</td>
                <td className="px-4 py-4 font-semibold text-cyan-100">{product.price}</td>
                <td className="px-4 py-4 text-slate-300">{product.stock.toLocaleString()}</td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      product.status === '预警'
                        ? 'bg-rose-400/10 text-rose-300'
                        : product.status === '补货中'
                          ? 'bg-amber-400/10 text-amber-300'
                          : 'bg-emerald-400/10 text-emerald-300'
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${product.score}%` }} />
                    </div>
                    <span className="text-slate-300">{product.score}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SalesChart() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">销售趋势</h3>
          <p className="mt-1 text-sm text-slate-400">GMV 与订单量 7 日走势</p>
        </div>
        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">实时</span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesTrend}>
            <defs>
              <linearGradient id="gmv" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#21f3d2" stopOpacity={0.55} />
                <stop offset="95%" stopColor="#21f3d2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.12)" vertical={false} />
            <XAxis dataKey="day" stroke="#64748b" tickLine={false} />
            <YAxis stroke="#64748b" tickLine={false} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, color: '#fff' }} />
            <Area dataKey="GMV" fill="url(#gmv)" stroke="#21f3d2" strokeWidth={3} type="monotone" />
            <Line dataKey="orders" stroke="#8b5cf6" strokeWidth={2} type="monotone" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function ChannelChart() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
      <h3 className="text-xl font-semibold">渠道结构</h3>
      <p className="mt-1 text-sm text-slate-400">Shopify、Marketplace 与社媒占比</p>
      <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.8fr] xl:grid-cols-1 2xl:grid-cols-[1fr_0.8fr]">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regionData}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.12)" vertical={false} />
              <XAxis dataKey="region" stroke="#64748b" tickLine={false} />
              <YAxis stroke="#64748b" tickLine={false} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, color: '#fff' }} />
              <Bar dataKey="revenue" radius={[10, 10, 0, 0]}>
                {regionData.map((entry, index) => (
                  <Cell fill={chartColors[index % chartColors.length]} key={entry.region} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3">
          {channelData.map((item, index) => (
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-3" key={item.channel}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>{item.channel}</span>
                <span className="font-semibold text-cyan-100">{item.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full" style={{ width: `${item.value}%`, backgroundColor: chartColors[index] }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiPanel() {
  return (
    <section className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-5 shadow-2xl shadow-cyan-950/30">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
          <Bot className="size-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">AI 标题生成器</h3>
          <p className="text-sm text-slate-400">输入卖点，一键输出多语言 SEO 标题。</p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Prompt Preview</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          为 Shopify 商品“AI Pet Feeder with HD Camera”生成 5 个英文标题，突出自动喂食、夜视摄像头、App 远程控制和 Prime-like 快速配送。
        </p>
      </div>
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100">
        <Sparkles className="size-4" />
        立即生成标题
      </button>
    </section>
  );
}

export default App;
