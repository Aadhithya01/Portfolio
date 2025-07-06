import { portfolioData } from "@/data/portfolio-data";

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t bg-secondary">
            <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
                <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}
