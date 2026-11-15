export const razor = {
  name: "Avus Razor",
  tagline: "Tradição. Estilo. Precisão.",
  whatsapp: "5500000000000", // TODO: número real (DDI+DDD+número)
  address: "São Paulo, SP", // TODO: endereço real
  horario: "Atendimento com hora marcada", // TODO: dias e horários reais
};

export interface Servico { id: string; nome: string; desc: string; preco: number; min: number }

// TODO: preços e durações reais
export const servicos: Servico[] = [
  { id: "corte", nome: "Corte Clássico", desc: "Precisão e estilo atemporal.", preco: 60, min: 40 },
  { id: "barba", nome: "Barba Tradicional", desc: "Toalha quente, navalha e cuidado completo.", preco: 45, min: 30 },
  { id: "combo", nome: "Combo Executivo", desc: "Corte e barba na mesma cadeira.", preco: 95, min: 70 },
  { id: "tratamento", nome: "Tratamento", desc: "Hidratação e revitalização do cabelo e da barba.", preco: 70, min: 40 },
];

export const barbeiros = [
  { id: "marcus", nome: "Marcus V.", esp: "Corte clássico" },
  { id: "leonardo", nome: "Leonardo K.", esp: "Barba tradicional e visagismo" },
  { id: "rafael", nome: "Rafael S.", esp: "Estilo moderno clássico" },
];

// TODO: trocar pelas fotos reais da barbearia
export const galeria = [
  "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=75",
];

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });
