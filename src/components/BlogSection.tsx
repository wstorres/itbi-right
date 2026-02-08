import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "STJ consolida entendimento sobre base de cálculo do ITBI",
    excerpt: "Decisão recente reforça que o ITBI deve ser calculado sobre o valor da transação, não sobre valor de referência municipal.",
    date: "2024-01-15",
    category: "Jurisprudência",
  },
  {
    id: 2,
    title: "Como identificar se você pagou ITBI a mais",
    excerpt: "Guia prático para verificar se o imposto pago na compra do seu imóvel foi calculado corretamente.",
    date: "2024-01-10",
    category: "Guia Prático",
  },
  {
    id: 3,
    title: "Prazo para solicitar restituição de ITBI",
    excerpt: "Entenda os prazos legais e quando você ainda pode recuperar valores pagos indevidamente.",
    date: "2024-01-05",
    category: "Legislação",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-wide mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Blog e Atualizações</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe as últimas decisões judiciais, mudanças na legislação e dicas práticas sobre restituição de ITBI.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card-elevated p-6 flex flex-col h-full group cursor-pointer"
            >
              {/* Category Badge */}
              <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm flex-grow mb-4">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
