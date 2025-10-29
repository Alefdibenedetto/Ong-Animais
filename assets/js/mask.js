// Máscaras simples para CPF, telefone e CEP
document.addEventListener('DOMContentLoaded', function(){
  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');
  const form = document.getElementById('cadastroForm');

  function setCursorToEnd(el){
    if(el.setSelectionRange){
      const len = el.value.length;
      el.setSelectionRange(len,len);
    }
  }

  if(cpfInput){
    cpfInput.addEventListener('input', function(e){
      let v = e.target.value.replace(/\D/g,'').slice(0,11);
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
      v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
      e.target.value = v;
      setCursorToEnd(e.target);
    });
  }

  if(telInput){
    telInput.addEventListener('input', function(e){
      let v = e.target.value.replace(/\D/g,'').slice(0,11);
      if(v.length > 10){
        v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if(v.length > 5){
        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if(v.length > 2){
        v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      }
      e.target.value = v;
      setCursorToEnd(e.target);
    });
  }

  if(cepInput){
    cepInput.addEventListener('input', function(e){
      let v = e.target.value.replace(/\D/g,'').slice(0,8);
      v = v.replace(/(\d{5})(\d)/, '$1-$2');
      e.target.value = v;
      setCursorToEnd(e.target);
    });
  }

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Simulação de envio — aqui você conectaria a um backend
      alert('Cadastro enviado (simulação). Obrigado!');
      form.reset();
    });
  }
});
