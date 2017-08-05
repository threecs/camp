<?php $__env->startSection('title'); ?>
About Me
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
  <h1>A Little About Me</h1>

    <hr>

  <p>
    My name is <?php echo e($first_name); ?> <?php echo e($last_name); ?>, and you can contact me at
    <a href="mailto:<?php echo e($email); ?>"><?php echo e($email); ?></a>.
  </p>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>