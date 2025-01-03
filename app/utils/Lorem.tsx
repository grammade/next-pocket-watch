class Lorem{
    static text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum quis tortor a eleifend. Praesent eget nunc vitae nisi finibus blandit. Nam dignissim rutrum arcu, nec volutpat lacus faucibus vitae. Ut laoreet lacinia ultrices. Pellentesque diam risus, convallis vitae dui in, cursus vestibulum justo. Nullam tincidunt risus sit amet malesuada rutrum. Aliquam maximus nulla vel faucibus aliquet. Morbi faucibus diam a ligula aliquam consectetur. Donec consectetur bibendum ligula, et bibendum massa fringilla ut. Etiam nunc ligula, volutpat at hendrerit eu, fermentum eget felis. Praesent bibendum, tellus non iaculis finibus, nibh mauris facilisis sem, non faucibus ipsum lectus in justo. Fusce iaculis rhoncus enim, sed vestibulum risus rutrum sed. Pellentesque tempus molestie augue sit amet dapibus. Etiam risus tortor, gravida ut leo ac, hendrerit viverra purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc libero est, consectetur eget ex at, elementum interdum sapien. '
        .split(' ');
    
    static get(c = 1){
        return this.text.slice(0, c).join(" ");
    }
    
    static async image(w: number, h: number){
        const resp = await fetch(`https://picsum.photos/${w}/${h}`);
        return resp.url;
    }
}

export {Lorem}