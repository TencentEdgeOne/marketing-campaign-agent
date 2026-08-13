import type { Locale } from "./types"

type Messages = Record<string, string>

const zh: Messages = {
  // Header
  "app.title": "德林哥的营销活动策划工作台",
  "app.new": "新建",
  "app.history": "历史",

  // Phases
  "phase.discovery": "需求调研",
  "phase.planning": "方案策划",
  "phase.integration": "策略整合",
  "phase.content": "内容产出",
  "phase.finalize": "方案定稿",

  // Actions
  "action.confirm": "确认",
  "action.redo": "重做",
  "action.rollback": "返回上一步",
  "action.finish": "全部完成",
  "action.skip_discovery": "信息够了，开始策划",
  "action.send": "发送",
  "action.start": "开始策划",
  "action.continue_edit": "继续修改",

  // Cards
  "card.audience": "受众画像",
  "card.brand_creative": "品牌创意",
  "card.channel_plan": "渠道策略",
  "card.strategy": "整合策略",
  "card.copywriting": "营销文案",

  // Agents
  "agent.chief_strategist": "策略总监",
  "agent.market_analyst": "市场分析师",
  "agent.brand_creative_director": "品牌创意总监",
  "agent.channel_planner": "渠道策划师",
  "agent.copywriter": "文案专家",

  // Status
  "status.generating": "生成中...",
  "status.waiting": "等待操作...",
  "status.ready": "就绪",

  // Start Panel
  "start.title": "创建营销活动方案",
  "start.name_placeholder": "活动名称（如：618大促、新品发布）",
  "start.brief_placeholder": "简要描述你的营销需求（产品/服务、目标、预算范围等）",
  "start.examples": "快速示例",
  "start.example1": "新茶饮品牌 618 促销活动",
  "start.example2": "SaaS 产品线上发布会推广",
  "start.example3": "线下零售门店周年庆",
  "start.brief1": "新茶饮品牌夏日促销，目标年轻女性群体，预算50万，线上为主",
  "start.brief2": "B2B SaaS 产品线上发布会，面向中小企业 CTO/IT负责人",
  "start.brief3": "大型商场5周年庆，辐射周边3公里社区家庭消费者",

  // Input
  "input.placeholder": "输入你的回答或反馈...",
  "input.feedback_placeholder": "给修改意见...",
}

const en: Messages = {
  "app.title": "Marketing Campaign Workbench",
  "app.new": "New",
  "app.history": "History",

  "phase.discovery": "Research",
  "phase.planning": "Planning",
  "phase.integration": "Integration",
  "phase.content": "Content",
  "phase.finalize": "Finalize",

  "action.confirm": "Confirm",
  "action.redo": "Redo",
  "action.rollback": "Go Back",
  "action.finish": "All Done",
  "action.skip_discovery": "Enough info, start planning",
  "action.send": "Send",
  "action.start": "Start Planning",
  "action.continue_edit": "Continue Editing",

  "card.audience": "Audience Profile",
  "card.brand_creative": "Brand Creative",
  "card.channel_plan": "Channel Strategy",
  "card.strategy": "Integrated Strategy",
  "card.copywriting": "Marketing Copy",

  "agent.chief_strategist": "Chief Strategist",
  "agent.market_analyst": "Market Analyst",
  "agent.brand_creative_director": "Creative Director",
  "agent.channel_planner": "Channel Planner",
  "agent.copywriter": "Copywriter",

  "status.generating": "Generating...",
  "status.waiting": "Awaiting action...",
  "status.ready": "Ready",

  "start.title": "Create Marketing Campaign",
  "start.name_placeholder": "Campaign name (e.g., Summer Sale, Product Launch)",
  "start.brief_placeholder": "Describe your marketing needs (product/service, goals, budget range, etc.)",
  "start.examples": "Quick Examples",
  "start.example1": "New beverage brand summer promotion",
  "start.example2": "SaaS product launch campaign",
  "start.example3": "Retail store anniversary event",
  "start.brief1": "New tea brand summer promo targeting young women, $70K budget, primarily online",
  "start.brief2": "B2B SaaS product launch event, targeting SMB CTOs and IT leaders",
  "start.brief3": "Large shopping mall 5th anniversary, targeting families within 3km radius",

  "input.placeholder": "Type your answer or feedback...",
  "input.feedback_placeholder": "Give feedback...",
}

const messages: Record<Locale, Messages> = { zh, en }

let currentLocale: Locale = "zh"

export function setLocale(locale: Locale) {
  currentLocale = locale
  localStorage.setItem("marketing-campaign-locale", locale)
}

export function getLocale(): Locale {
  return currentLocale
}

export function initLocale(): Locale {
  const saved = localStorage.getItem("marketing-campaign-locale") as Locale | null
  if (saved && (saved === "zh" || saved === "en")) {
    currentLocale = saved
    return saved
  }
  const browser = navigator.language.startsWith("zh") ? "zh" : "en"
  currentLocale = browser
  return browser
}

export function t(key: string): string {
  return messages[currentLocale][key] || key
}
