import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "next/link";

interface Product {
  id: string;
  imageUrl: string;
  productName: string;
  ownerName: string;
  priceProduct: string;
  selectedEcommerce: string; // Ensure this property is included
  whatsappNumber: string; // Add this line
}

interface ProdukCardProps {
  product: Product;
}

const formatRupiah = (number: string) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(Number(number));
};

const ProdukCard: React.FC<ProdukCardProps> = ({ product }) => {
  return (
    <Link href={`/produk/${product.id}`} passHref>
      <Card sx={{ width: 370 }}>
        <div className="mb-2">
          <Typography level="title-lg">{product.productName}</Typography>
          <Typography level="body-sm">
            {product.ownerName} | {product.selectedEcommerce}
          </Typography>
        </div>
        <AspectRatio minHeight="20px" maxHeight="250px">
          <img
            src={product.imageUrl}
            alt={product.productName}
            loading="lazy"
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Harga:</Typography>
            <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
              {formatRupiah(product.priceProduct)}
            </Typography>
          </div>
          <Link
            href={`https://wa.me/${product.whatsappNumber}`}
            className="ml-auto self-center font-semibold"
          >
            <Button
              variant="solid"
              size="md"
              color="success"
              aria-label="Contact via WhatsApp"
            >
              WhatsApp
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProdukCard;
