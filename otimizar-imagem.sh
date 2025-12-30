#!/bin/bash

# Script para otimizar imagem artigo1.png
# Reduz de 5.4MB para ~300KB mantendo qualidade visual

cd "$(dirname "$0")"

echo "🎨 Otimizando artigo1.png..."

# Criar backup
cp public/images/artigo1.png public/images/artigo1-original.png
echo "✅ Backup criado: artigo1-original.png"

# Verificar se sips está disponível (nativo do macOS)
if command -v sips &> /dev/null; then
    echo "📐 Redimensionando para 1200x675px (se necessário)..."
    sips -Z 1200 public/images/artigo1.png
    
    echo "🗜️  Comprimindo imagem..."
    # Converter para JPG com qualidade 85% (bem menor que PNG)
    sips -s format jpeg -s formatOptions 85 public/images/artigo1.png --out public/images/artigo1-optimized.jpg
    
    # Renomear otimizada para PNG (ou usar JPG diretamente)
    mv public/images/artigo1-optimized.jpg public/images/artigo1.jpg
    
    echo "✅ Imagem otimizada criada: artigo1.jpg"
    echo ""
    echo "📊 Tamanhos:"
    echo "   Original: $(du -h public/images/artigo1-original.png | cut -f1)"
    echo "   Otimizada: $(du -h public/images/artigo1.jpg | cut -f1)"
    echo ""
    echo "💡 Você pode usar artigo1.jpg (menor) ou artigo1.png (original)"
else
    echo "❌ sips não encontrado. Use alternativa online:"
    echo "   https://tinypng.com/"
    echo "   https://squoosh.app/"
fi

