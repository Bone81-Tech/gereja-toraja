import Head from 'next/head'
import Layout from '../components/Layout'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Alert from '../components/Alert'
import { useState } from 'react';

export default function Kontak() {
  // State untuk form
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Hapus error saat user mulai mengetik
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama wajib diisi';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.subjek.trim()) {
      newErrors.subjek = 'Subjek wajib diisi';
    }
    
    if (!formData.pesan.trim()) {
      newErrors.pesan = 'Pesan wajib diisi';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ nama: '', email: '', subjek: '', pesan: '' });
      
      // Reset success message setelah beberapa detik
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const kategoriPertanyaan = [
    { value: 'informasi', label: 'Informasi Umum' },
    { value: 'pelayanan', label: 'Pelayanan' },
    { value: 'kegiatan', label: 'Kegiatan Gereja' },
    { value: 'donasi', label: 'Donasi' },
    { value: 'lainnya', label: 'Lainnya' }
  ];

  return (
    <Layout>
      <Head>
        <title>Kontak - GEREJA TORAJA JEMAAT SURABAYA</title>
        <meta name="description" content="Hubungi Gereja Toraja Jemaat Surabaya" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-toraja-merah mb-6">Kontak Kami</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-toraja-merah mb-4">Informasi Kontak</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Kantor Gereja</h3>
                  <p className="text-gray-700">Jl. Jambangan Baru Selatan No 8A, Surabaya</p>
                  <p className="text-gray-700">Telp: 031 8295656</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">Jam Kerja</h3>
                  <p className="text-gray-700">Senin - Sabtu : 08.00 - 16.00</p>
                  <p className="text-gray-700">Minggu : 07.00 - 12.00</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">Pastori Jemaat</h3>
                  <p className="text-gray-700">Perum Griya Kebraon Tengah II Blok FE-12 , Surabaya</p>
                  <p className="text-gray-700">Telp: 031 99753087</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">Nomor Telepon Pendeta</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Pdt Thema Yunus La'de , S.Th: 0812 4119 6129</li>
                    <li>Pdt Sanover Sampe Toding Allo , S.Th, M.Psi: 0852 3085 5856</li>
                    <li>Pdt Sriwanty Yasman Samperuru , S.Th: 0812 4177 8711</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-toraja-merah">
              <h2 className="text-xl font-semibold text-toraja-merah mb-4">Kirim Pesan</h2>

              {submitSuccess && (
                <Alert variant="success" title="Pesan Terkirim">
                  Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda.
                </Alert>
              )}
              
              <form onSubmit={handleSubmit}>
                <Input
                  label="Nama Lengkap"
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.nama}
                  onChange={handleChange}
                  error={errors.nama}
                  required
                />
                
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan alamat email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                
                <Select
                  label="Kategori Pertanyaan"
                  id="subjek"
                  name="subjek"
                  options={kategoriPertanyaan}
                  value={formData.subjek}
                  onChange={handleChange}
                  error={errors.subjek}
                  required
                />
                
                <div className="mb-4">
                  <label htmlFor="pesan" className="block text-gray-700 text-sm font-medium mb-1">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows="5"
                    placeholder="Tulis pesan Anda di sini"
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.pesan 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                  ></textarea>
                  {errors.pesan && <p className="mt-1 text-sm text-red-600">{errors.pesan}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="md" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}