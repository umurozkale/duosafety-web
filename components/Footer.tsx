export default function Footer() {
  return (
    <footer className="bg-duo-navy text-white py-8 mt-auto">
      <div className="max-w-[1240px] mx-auto px-margin text-center font-body text-sm text-inverse-primary">
        <p>&copy; {new Date().getFullYear()} DUO Safety Consultancy. All rights reserved.</p>
      </div>
    </footer>
  )
}