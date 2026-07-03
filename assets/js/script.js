

// Bilgilendirme Card Component v1
document.querySelectorAll('[data-notice-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('[data-notice-card]');
    const detail = card?.querySelector('.notice-detail');
    if (!detail) return;

    const isHidden = detail.hasAttribute('hidden');
    document.querySelectorAll('.notice-detail').forEach((item) => {
      if (item !== detail) {
        item.setAttribute('hidden', '');
        const otherButton = item.closest('[data-notice-card]')?.querySelector('[data-notice-toggle]');
        if (otherButton) otherButton.textContent = 'İncele →';
      }
    });

    if (isHidden) {
      detail.removeAttribute('hidden');
      button.textContent = 'Kapat ↑';
    } else {
      detail.setAttribute('hidden', '');
      button.textContent = 'İncele →';
    }
  });
});

document.querySelectorAll('[data-share-page]').forEach((button) => {
  button.addEventListener('click', async () => {
    const shareData = {
      title: 'Yakut Mali Müşavirlik Bilgilendirme',
      text: 'Yakut Mali Müşavirlik bilgilendirme içeriği',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {}
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      button.textContent = 'Bağlantı Kopyalandı';
      setTimeout(() => { button.textContent = 'Paylaş'; }, 1800);
    }
  });
});
